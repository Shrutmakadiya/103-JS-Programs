function a(){
    let hcf;
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    
    for(let i=1; i<=a && i<=b ; i++){
        if(a % i == 0 && b % i == 0){
            hcf = i;
        }
    }
    document.getElementById('ans').innerHTML = `HCF of ${a} and ${b} is ${hcf}.`
}