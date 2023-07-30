import Encrypter from "./Encrypter.js"

const KEY = "secret_key";
const message = "Hello, World!";

// Encrypt and Decrypt a message
const encryptedMessage = Encrypter.encrypt(message, KEY);
const decryptedMessage = Encrypter.decrypt(encryptedMessage, KEY);

// Perform multi-level encryption and decryption
const iteration = 3;
const multiEncryptedMessage = Encrypter.multiEncrypt(message, KEY, iteration);
const multiDecryptedMessage = Encrypter.multiDecrypt(multiEncryptedMessage, KEY, iteration);