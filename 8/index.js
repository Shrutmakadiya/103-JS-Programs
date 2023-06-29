function myanswer(){

    let a = document.getElementById('input1').value 
    let b =  ((9/5)*(a))+32

    document.getElementById('ans').innerHTML = `${a} Celsius is = ${b} Fahrenheit`
}