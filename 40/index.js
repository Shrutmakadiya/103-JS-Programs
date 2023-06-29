let string = prompt("Enter string")
function ans(string){
    let count = string.match(/[aeiou]/gi).length
    return count
}
document.write(`Your string has ${ans(string)} Vowels`)