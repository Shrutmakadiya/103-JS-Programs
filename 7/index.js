function myanswer(){

    let a = document.getElementById('input1').value 
    let b =  a * 0.621371

    document.getElementById('ans').innerHTML = `${a} Kilometers is = ${b} Miles`
}