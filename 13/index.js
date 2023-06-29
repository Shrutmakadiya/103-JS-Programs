function myanswer(){

    let a = document.getElementById('input1').value 
    let p = true

    if(a == 1){
        document.getElementById('ans').innerHTML = `1 is neither prime nor composite number.`
    }

    else if (a > 1){
        for(let i=2; i<a ; i++){
            if(a % i == 0){
               p = false
               break
            }
        }
            if(p){
                document.getElementById('ans').innerHTML = `${a} is Prime Number.`    
            }
            else{
                document.getElementById('ans').innerHTML = `${a} is Not a Prime Number.`
            }
    }
    else{
        document.getElementById('ans').innerHTML = `${a} is Not a Prime Number.`
    }
  }