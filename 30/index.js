const number = parseInt(prompt('Enter a positive integer: '));

function factorial(number){
if (number === 0) {
    return 1
}
    return number * factorial(number - 1)

}
document.write("Factorial of "+number+" is "+factorial(number))