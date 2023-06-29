function myfunction(value){
    if(typeof value == "number" && !isNaN(value)){
        if(Number.isInteger(value)){
            document.write(value+ " is a Number")
        }
        else{
            document.write(value + " is a float")
        }
    }
    else{
        document.write(value+ " is not a number")
    }
}
let input = parseFloat(prompt("Enter a number."))
myfunction(input)