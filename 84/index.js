function split(name){
    let ex = name.split('.').pop()
    return ex
}
let input = prompt("Enter a file name  [MUST WRITE .EXTENSION")
document.write("Your Extension is = " + split(input))