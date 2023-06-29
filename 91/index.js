function check (variable){
    if(variable instanceof Function){
        document.write("variable is function type <br>")
    }
    else{
        document.write("variable is not a function type <br>")
    }
}
let a = "virat kohali"
let b = function () {
    return "Rohit sharma"
}
check (a)
check (b)