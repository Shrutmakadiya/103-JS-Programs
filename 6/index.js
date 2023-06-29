function myanswer(){

    let r1,r2

    let a = document.getElementById('input1').value 
    let b = document.getElementById('input2').value 
    let c = document.getElementById('input3').value

    let d = b * b - 4 * a * c

    if(d > 0){
        r1 = (-b + Math.sqrt(d)) / (2 * a)
        r2 = (-b - Math.sqrt(d))/  (2 * a)

        document.getElementById('ans').innerHTML = "root 1 = " + r1  + " and " + "root 2 = " + r2
    }

    else if(d == 0){
        r1 = r2 = -b / (2 * a)

        document.getElementById('ans').innerHTML = "root 1 = " + r1  + " and " + "root 2 = " + r2
    }

    else{
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);

        document.getElementById('ans').innerHTML = "root 1 = " + (realPart + imagPart)  + " and " + "root 2 = " + (realPart - imagPart)
    }
  }