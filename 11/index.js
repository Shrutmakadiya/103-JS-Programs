function myanswer(){

    let a = document.getElementById('input1').value 
   
    if(a % 2 == 0){
        document.getElementById('ans').innerHTML = `${a} is Even Number.`
    }

    else{
        document.getElementById('ans').innerHTML = `${a} is Odd Number.`
    }
  }