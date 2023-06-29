var a=   parseInt(prompt("enter  number:"));
let n1=0,n2=1,next;
document.write("Fibonacci series is...<br>")
 for (let i=0;i<=a;i++){
     document.write(n1 + " ")
     next=n1+n2;
     n1=n2;
     n2=next
 }