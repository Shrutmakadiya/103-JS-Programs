function myanswer (){
    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = (a * b) / 2
    document.getElementById('ans').innerHTML ="Area of a Triangle = "+ c 
  }