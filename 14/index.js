let number;
let prime
let a=[]
    for (let number=0;number<100;number++){
        let prime = 0
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            prime=1
             break;
        }
    }  

if( number>1&& prime==0)
    {
        a.push(number)
    }

}  
document.write(a)  