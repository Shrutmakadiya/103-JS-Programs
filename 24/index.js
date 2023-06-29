function a(){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
  
    let min = (a > b) ? a : b
    while(true){
        if (min % a == 0 && min % b == 0 ){
            document.getElementById('ans').innerHTML = `The LCM of ${a} and ${b} is ${min}`;
            break;
        }
        min ++
    }
}