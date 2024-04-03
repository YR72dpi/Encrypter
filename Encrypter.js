import Pako from "pako"

export default class Encrypter {

    static encrypt(msg, KEY) {
        const SALT = parseInt(Math.random() * 1000)
        const SALT_KEY = String(SALT) + KEY

        const SALT_KEY64 = btoa(SALT_KEY)

        const binary = {
            "SALT_KEY64": Lib.removeSpace(Lib.stringToBinary(SALT_KEY64)),
            "SALT": Lib.removeSpace(Lib.stringToBinary(String(SALT))),
            "msg": Lib.removeSpace(Lib.stringToBinary(msg))
        }
        var output = ""

        let binaryTextSplited = binary.msg.split("")
        let binarySaltKeySplited = binary.SALT_KEY64.split("")

        let encryptedTextBinary = ""
        for (let i = 0; i < binaryTextSplited.length; i++) {
            encryptedTextBinary += String(binaryTextSplited[i] ^ binarySaltKeySplited[i % binarySaltKeySplited.length])
        }

        output = Lib.compressString(binary.SALT + "." + encryptedTextBinary)

        return output
    }

    static decrypt(msg, KEY) {
        var output = ""

        const SALT = Lib.binaryToString(Lib.decompressString(msg).split(".")[0])
        const SALT_KEY = String(SALT) + KEY

        const SALT_KEY64 = btoa(SALT_KEY)

        const binary = {
            "SALT_KEY64": Lib.removeSpace(Lib.stringToBinary(SALT_KEY64)),
            "msg": Lib.decompressString(msg).split(".")[1]
        }

        let binaryTextSplited = binary.msg
        let binarySaltKeySplited = binary.SALT_KEY64.split("")
        
        let encryptedTextBinary = ""
        for (let i = 0; i < binaryTextSplited.length; i++) {
            encryptedTextBinary += String(binaryTextSplited[i] ^ binarySaltKeySplited[i % binarySaltKeySplited.length])
        }

        output = Lib.binaryToString(encryptedTextBinary)

        return output
    }

    static multiEncrypt(msg, KEY, iteration) {

        let output = msg;
        for (let i = 0; i < iteration; i++) {
            output = this.encrypt(output, KEY + String(i))
        }
        return output
    }

    static multiDecrypt(msg, KEY, iteration) {

        let output = msg;
        for (let i = iteration - 1; i >= 0; i--) {
            output = this.decrypt(output, KEY + String(i))
        }
        return output
    }

}


class Lib {

    static stringToBinary(string) {
        
        let output = "";
        for (var i = 0; i < string.length; i++) {
            let binary = string[i].charCodeAt(0).toString(2);
            while (binary.length < 8) {
                binary = '0' + binary;
            }

            output += binary + " "
        }
        return output
    }

    static binaryToString(binaryString) {
        
        var binaryChunks = binaryString.match(/.{1,8}/g);
        var text = "";

        for (var i = 0; i < binaryChunks.length; i++) {
            var decimalValue = parseInt(binaryChunks[i], 2);
            text += String.fromCharCode(decimalValue);
        }

        return text;
    }

    static removeSpace(string) {
        
        let output = string
        while (output.includes(" ")) {
            output = output.replace(" ", "")
        }
        return output
    }

    static compressString(inputString) {
        
        try {
            // Convertir la chaîne de caractères en un tableau de bytes (Uint8Array)
            const encoder = new TextEncoder();
            const uint8Array = encoder.encode(inputString);

            // Compresser le tableau de bytes en utilisant pako
            const compressedArray = Pako.gzip(uint8Array);

            // Convertir le tableau de bytes compressé en une chaîne encodée en base64
            const base64EncodedCompressedString = btoa(String.fromCharCode(...compressedArray));

            return base64EncodedCompressedString;
        } catch (error) {
            console.error("Erreur lors de la compression :", error);
            return null;
        }
    }

    static decompressString(compressedString) {
        
        try {
            // Convertir la chaîne encodée en base64 en un tableau de bytes compressé (Uint8Array)
            const compressedArray = new Uint8Array([...atob(compressedString)].map(char => char.charCodeAt(0)));

            // Décompresser le tableau de bytes en utilisant pako
            const decompressedArray = Pako.inflate(compressedArray, { to: 'string' });

            // Convertir Uint8Array en chaîne de caractères UTF-8
            const decoder = new TextDecoder();
            const decompressedString = decoder.decode(Buffer.from(decompressedArray));

            return decompressedString;
        } catch (error) {
            console.error("Erreur lors de la décompression :", error);
            return null;
        }
    }

}