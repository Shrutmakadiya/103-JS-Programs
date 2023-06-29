function myfunction(value){
    if(value === undefined || value === null){
        document.write(`variable is undefined or null <br>`)
    }
    else{
        document.write(`${value} is NOT undefine or null variable <br>`)
    }
}

myfunction(27)
myfunction(null)
myfunction()