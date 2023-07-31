import Encrypter from "./Encrypter.js"

const KEY = "a";
const message = "GB48d9!?";

// Encrypt and Decrypt a message
const encryptedMessage = Encrypter.encrypt(message, KEY); // output : H4sIAAAAAAAAA03NMQ6AIAyF4StJcGUhKaORBioHgASdvP+kpdQ4fsN7fzruq51mQwg2ZfQNDGCpYsLwOkfxOg1sEvu6qGns2Vi6eu7Z4TPKXnv6//WkT+Nfep1ttff/36NzD3hn34XEAAAAc
const decryptedMessage = Encrypter.decrypt(encryptedMessage, KEY); // output : Hello, World!

// Perform multi-level encryption and decryption
const iteration = 3;
const multiEncryptedMessage = Encrypter.multiEncrypt(message, KEY, iteration);
const multiDecryptedMessage = Encrypter.multiDecrypt(multiEncryptedMessage, KEY, iteration);