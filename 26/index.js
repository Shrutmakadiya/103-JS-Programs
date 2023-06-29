function myfunction(){
    
function sum(num){
if(num > 0) {
    return num + sum(num - 1);
}
else {
    return num;
}
}

let a = parseInt(document.getElementById('input1').value) 
document.write("Sum of "+a+" natural number is "+ sum(a))
}