*thank to chatGPT for the documentation*
# _Encrypter_ Class Documentation

The `Encrypter` class provides methods to encrypt and decrypt messages using a custom encryption algorithm. It also offers multi-level encryption and decryption for enhanced security. The encryption process involves salting and bitwise XOR operations between the message and a derived key. Additionally, the class uses the `pako` library for data compression.

## Importing the Class

To use the `Encrypter` class, you need to import it. The class depends on the `pako` library for compression, so make sure you have it installed in your project.

Make a simple 
```bash
npm install 
```
and add this line on top of your code
```javascript
import Encrypter from "./path/to/Encrypter.js";
```

## Class Methods

### `static encrypt(msg, KEY)`

This method encrypts the provided `msg` using the specified encryption `KEY`.

#### Parameters:
- `msg` (string): The message to be encrypted.
- `KEY` (string): The encryption key.

#### Returns:
- `string`: The encrypted message as a string.

### `static decrypt(msg, KEY)`

This method decrypts the provided encrypted `msg` using the specified encryption `KEY`.

#### Parameters:
- `msg` (string): The encrypted message to be decrypted.
- `KEY` (string): The encryption key.

#### Returns:
- `string`: The decrypted message as a string.

### `static multiEncrypt(msg, KEY, iteration)`

This method performs multi-level encryption on the provided `msg` using the specified `KEY`. The `iteration` parameter determines the number of encryption rounds.

#### Parameters:
- `msg` (string): The message to be encrypted.
- `KEY` (string): The encryption key.
- `iteration` (number): The number of encryption rounds to apply.

#### Returns:
- `string`: The multi-level encrypted message as a string.

### `static multiDecrypt(msg, KEY, iteration)`

This method performs multi-level decryption on the provided encrypted `msg` using the specified `KEY`. The `iteration` parameter should match the number of encryption rounds used during encryption.

#### Parameters:
- `msg` (string): The encrypted message to be decrypted.
- `KEY` (string): The encryption key.
- `iteration` (number): The number of encryption rounds that were applied.

#### Returns:
- `string`: The multi-level decrypted message as a string.

## Helper Class: `Lib`

The `Lib` class contains utility methods used by the `Encrypter` class for string manipulation, binary conversions, and compression.

### Helper Methods:

- `static stringToBinary(string)`
- `static binaryToString(binaryString)`
- `static removeSpace(string)`
- `static compressString(inputString)`
- `static decompressString(compressedString)`

**Note**: The `Lib` class is an internal implementation detail of the `Encrypter` class, and you should not use it directly.

## Usage Examples

Here are some examples of how to use the `Encrypter` class:

```javascript
const KEY = "secret_key";
const message = "Hello, World!";

// Encrypt and Decrypt a message
const encryptedMessage = Encrypter.encrypt(message, KEY);
const decryptedMessage = Encrypter.decrypt(encryptedMessage, KEY);

// Perform multi-level encryption and decryption
const iteration = 3;
const multiEncryptedMessage = Encrypter.multiEncrypt(message, KEY, iteration);
const multiDecryptedMessage = Encrypter.multiDecrypt(multiEncryptedMessage, KEY, iteration);
```

Please note that this is a custom encryption implementation and may not be as secure as standard encryption algorithms. For real-world security, it's recommended to use well-established encryption libraries and protocols.