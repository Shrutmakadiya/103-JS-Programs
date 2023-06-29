const a = prompt("Enter Year:")
    
        function ans(a){  
        if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0){
            document.write(a + " is leap year")
        }
        else{
            document.write(a + " is not leap year")
        }
    }
    ans(a)