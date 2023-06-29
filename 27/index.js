function myfunction(){

    let a = document.getElementById('input1').value 

    let num =  Math.ceil((Math.random() * 100))
    console.log(num)

    if(parseInt(num) !== a ){
        document.getElementById('again').innerHTML = `Guess a number from 1 to 10 again`;
    }

    else if(num === a){
        document.getElementById('ans').innerHTML = `You Guess the correct Number`;
    }
}