function myanswer(){

    let a = document.getElementById('input1').value 
   
    if(a > 0){
        document.getElementById('ans').innerHTML = `${a} is Positive`
    }

    else if(a == 0){
        document.getElementById('ans').innerHTML = `${a} is Zero`
    }

    else{
        document.getElementById('ans').innerHTML = `${a} is Negative`
    }
  }