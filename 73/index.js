let array = [1,2,3,4]
document.write(`Array before insert = [${array}] <br>`)
let input = prompt("Enter that you want to insert at first in array.")
array.unshift(input)
document.write(`Array after insert = [${array}] `)