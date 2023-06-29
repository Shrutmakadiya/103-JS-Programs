// var a = document.getElementById('input1').value 
// var b = document.getElementById('input2').value 

function sum(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = a + b
    document.getElementById('ans').innerHTML = `${a} + ${b} = ${c}`
}

function min(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = a - b
    document.getElementById('ans').innerHTML = `${a} - ${b} = ${c}`
}

function mul(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = a * b
    document.getElementById('ans').innerHTML = `${a} * ${b} = ${c}`
}

function divi(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = a / b
    document.getElementById('ans').innerHTML = `${a} / ${b} = ${c}`
}