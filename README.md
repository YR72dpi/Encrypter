### ⚠️ Important ⚠️

__Please note__ that this is a custom encryption implementation and may not be as secure as standard encryption algorithms. For real-world security, it's recommended to use well-established encryption libraries and protocols.

*thank to chatGPT for the documentation*
# _Encrypter_ Class Documentation

The `Encrypter` class provides methods to encrypt and decrKzypt messages using a custom encryption algorithm. It also offers multi-level encryption and decryption for enhanced security. The encryption process involves salting and bitwise XOR operations between the message and a derived key. Additionally, the class uses the `pako` library for data compression.

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
const encryptedMessage = Encrypter.encrypt(message, KEY); // output : H4sIAAAAAAAAA03NMQ6AIAyF4StJcGUhKaORBioHgASdvP+kpdQ4fsN7fzruq51mQwg2ZfQNDGCpYsLwOkfxOg1sEvu6qGns2Vi6eu7Z4TPKXnv6//WkT+Nfep1ttff/36NzD3hn34XEAAAAc
const decryptedMessage = Encrypter.decrypt(encryptedMessage, KEY); // output : Hello, World!


// Perform multi-level encryption and decryption
const iteration = 3;
const multiEncryptedMessage = Encrypter.multiEncrypt(message, KEY, iteration); // outpupt : H4sIAAAAAAAAA4WZQa7cOAxEr5SgfYIGrGWAFr6YHKAD9OwGc//FpH+3rapH6mdp2JYlslhVpD9+/vvf73++/+h7u3yMfv29f9/7r/uP2Nv2Eb09r29/rvse2/P+/dvz+vG8f3nef173z/tte78/uj8/Xs/Hc/02rz/fv+J9+d55re9fj/uy3vH8sd547/ei+4l5vnF+7/38ud/Xed/Px3F/ri/n/1w/ju8/zu9LvC7z/O/9Ml4x43OcV74n5z/3847P45Ufj6ec53HEv818hezf49WP70cdn9uMj+BD8XA/8/m6/9B47xL/NuPRDA/veEr8Xvg6zuvxPc/bLB/v/AIfx3l4fca3y/qSn+P7x/4MD8T/EY+5XmyOv7is3r/594/4bHpe3V+unxMP/vyY+PZ4nPfbka+Mt2b15fi7J3z1eT6Lv9Wf4KMnfpnX3a/HDfvN+PF66xMPDftxPDLfA/iOiSdZT9/X82+ej4LvGF/nH7sv+7H6N7yF1bfV5xfxKPZ/1/pj/Vs92vnkuoMP8nXCa+bvofHQfBs/Kd4dnyOdX/dn/OL86d+X+nP8RK4Hqa/N16f+ROavkfLv5w/D91bUv+4P91V/jf/2m8d/sP5ZH5q/uX+t9/P9K9Z3Pvf4XoDXzeNL/M98U3/AfwXeTf8G8SPPE7+Cv0A8kp5f5n4m/qFH/n3JV8Z/sZ8CX9TPev+z3oVf4D+4PvHv+Sr0G35gHT/1Y/RTBd8N0b9Kb0wPpb5M78PiO/0D9c/qhXpnehwXx5/zj9Z31m/XO+Yf/E8/aHwPfqffdrxmfUn+yO67PtD/2fmJP+fnx+p7pT6RP+X81frpvOw/4H928pXwrfYveD6gP67H3fjI/Yb6FfGbW5UP6x8KPzzj3RD/Jvh7pPN31L/z8/RjKz2R/qjI70Lv5bz0W94fmH/fe4E/9ntZv10P+lpfd/hf6u2O+rN4FXph/VcRf/NLs5/VelvqC/F+tXgU/s/yRT03/mC/XPZ7C3+Z8U8+8H7E+/Fbwm/Gv/QPe9YX679n/O2+80Ou56m/6P+tP4f/uPK+xAf4Dcsv/bLo1ZB8c56h8UB/kfwb5w1WH1o/zI/Ob6Q+q/r2/Qzoc80/in/W35X5LfSnjD/rsZhvnPuVeDfjl6H83Vb8Y/kR/LN/gx63VfzTvAH9K/1j6f9cD9yfAY+pH4Z/W8VD+u+sZyv+s/rM/v88fxheK/9Tzve+0Bvvd1QfNF/kP5vvkO8j8W2aV9bnz/5K+L/QR8NX2a9141vqNfHPeWLGW1h9GN/txHM1f+X67Eeoz9nvF/kn/7ofN75m/8Z5JOd72i/Tn0s9pu+x/qCv1A/2B2l+RX9fxUP9qMQT89UA/lI/ZPinX8x4Vf6i/uZ5p+CP/Mn5p/Vr4n9s3r7w95xn+vwi0vWyn+A8Pvv/pP+Mf/4/YXoW9v0An9F/ZbzPeLMfqecRf+svff6Y/XSqP/R3tf4X9aZ4KeelnCfn+Qv728qP+vw769X6f43qLft9w2vGc8nH+f+Q9V9pnlj9fwrguYOf9H/ULeHT6p/zT/Ufaf6G76sfp18xPvv7PI/zreL/F+svz9fZL6d51Mr/LOqV/Sb9t9dfnvc0xEf5Av2s+n/vD8GnOl8t5wfMJ+tbnk/5L9Ybwk9fzWOqfpH5Ur9Z+dtq3pHqn3wKP5P8cJ6PWP9Z6EfWP90P/DLrrZi3sd/L89/ST1DfI/GDz9/z/yDXQ/q3sPepf9v/UwUHuNwfAAA=c
const multiDecryptedMessage = Encrypter.multiDecrypt(multiEncryptedMessage, KEY, iteration);  // output : Hello, World!
```

# Statistical

Some performance data

Configuration : 
```javascript
const KEY = "secret_key";
const message = "Hello, World!";
```

## Length of iterable results
`static multiEncrypt(msg, KEY, iteration)`
| Number of iteration | Number of result's character  |
|:-------------------:|:-------------------:|
|         1           |         153         |
|         2           |         601         |
|         3           |         1789        |
|         4           |         4877        |
|         5           |         12213       |
|         6           |         30441       |
|         7           |         73193       |

# To improve it
- can encrypt file
- can encrypt with key's array

## Bonus 😉
<details>
    <summary>Keygen</summary>

    No idea for a encryption key ?

```bash
npm run keygen
```
```text

    | Choose your favorite ⤵️
    | - -X8.f0@/)1nrOoLWE5uGc6G(tMv1G_ -
    | - HQNkSE$<0hll2#6<A1HoVa8Ti%n9^D -
    | - IDNi;4Pkn2hD^zlb}@HzL09GFyoqpO -
    | - 0,*ej4%.h/XS]!y=-^6k9q:JBf#n@> -
    | - XxVEt#!k3KqlWD#]]Vfwn&w0!45q;X -
    | - @S3LV3jJ.nm@ghXM=*KQKcApSWE:%x -
    | - ^b1I6B(E8$)GmG{EKD{cGjQ6w4E]JM -
    | - &0z%ROS?,)qXyujv3W#d9[C{%b+vX& -
    | - ayQtJ)a,q8-{gB?RCT]o3Ey$$vL(_n -
    | - +(^Wn5uS?9Mh_}PG@<E6qwoRL!50rI -
    ```
</details>