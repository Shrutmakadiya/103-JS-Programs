function a(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = document.getElementById('input3').value

    let r1 = a % 10
    let r2 = b % 10
    let r3 = c % 10

    if(r1 == r2 && r1 === r3){
        document.getElementById('ans').innerHTML = `${a}, ${b} and ${c} have the same last digit.`
    }
    else{
        document.getElementById('ans').innerHTML = `${a}, ${b} and ${c} not have the same last digit.`   
    }
}