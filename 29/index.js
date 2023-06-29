var a=   parseInt(prompt("enter  number:"));
function fibonacci(num){
    if (num < 2){
        return num;
    }
    else{
        return fibonacci(num -1) + fibonacci(num - 2)
    }
}
document.write("Fibonacci series is...<br>")
 for (let i=0;i<=a;i++){
     document.write(fibonacci(i) + " ")
 }