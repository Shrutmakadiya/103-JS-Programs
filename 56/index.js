let string = prompt("Enter String")
    let check =prompt("Enter String that you want to check")
    if(string.includes(check)){
        document.write(check +" is avalabile in "+ string)
    }
    else{
        document.write(check +" is not avalabile in "+ string)
    }