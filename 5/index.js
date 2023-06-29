function myanswer (){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 

    let temp;
    temp = a
    a=b
    b = temp
    document.getElementById('ans1').innerHTML ="First value = " + a 
    document.getElementById('ans2').innerHTML ="Second value = " + b 
  }