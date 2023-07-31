export default function generateRandomString(length=30, consoleResult=true) {
    const alphanumericChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/[]{},.:;';
    const allChars = alphanumericChars + specialChars;

    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars.charAt(randomIndex);
    }

    if(consoleResult) {
        console.log(randomString)
    }
    return randomString;
}

console.clear()
console.log("Choose your favorite ⤵️")
for (let i = 0; i < 10; i++) {
    console.log("- " + generateRandomString(30, false) + " -")
}