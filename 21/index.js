function a(){
    let a = document.getElementById('input1').value 

    let sum = 0

    for(let i=1;i<=a;i++){
        sum += i;
    }
    document.getElementById('ans').innerHTML = `sum of ${a} = ${sum}`
}