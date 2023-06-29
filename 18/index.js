function myanswer(){

let a = document.getElementById('input1').value 
const numberOfDigits = a.length;
let sum = 0;

let temp = a;

while (temp > 0) {

    let b = temp % 10;

    sum += b ** numberOfDigits;

    temp = parseInt(temp / 10); 
}

if (sum == a) {
    document.getElementById('ans').innerHTML = `${a} is an Armstrong number`;
}
else {
    document.getElementById('ans').innerHTML = `${a} is not an Armstrong number.`;
}
}