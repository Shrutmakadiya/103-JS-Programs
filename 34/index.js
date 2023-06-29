let a = (prompt('Enter a character : '));
let arr = a.split('')
arr.sort()
document.write("sorted words are:")
for(let element of arr){
    document.write(element + " ")
}