function over(){
    if(arguments.length == 0){
        document.write("there is no arguments<br>")
    }
    else if(arguments.length === 1){
        document.write("Passed at list two arguments <br>")
    }
    else{
        let result = 0;
        let length = arguments.length

        for(let i = 0 ; i < length ; i++){
            result = result + arguments[i]
        }
        document.write(result)
    }
}
over()
over(1)
over(5,5)