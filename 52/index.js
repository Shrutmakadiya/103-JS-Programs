const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const b = prompt("Enter Number ")
function generateString(length) {
    let result = ' ';
    const aLength = a.length;
    for (let i = 0; i < length; i++){
        result += a.charAt(Math.floor(Math.random() * aLength))
    }
    return result
}
document.write(generateString(b))