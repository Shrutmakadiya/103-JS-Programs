function myanswer(){

    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = document.getElementById('input3').value

    const largest = Math.max(a, b, c);

    document.getElementById('ans').innerHTML = "Largest number is = " + largest
  }