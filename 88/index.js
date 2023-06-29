let min = parseInt(prompt("Enter min Number"))
let max = parseInt(prompt('Enter max Number'))
let random = Math.floor(Math.random() * (max-min+1)+min)
document.write("Random Number is : "+ random)