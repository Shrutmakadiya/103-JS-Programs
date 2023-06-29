function a(){
    let a = document.getElementById('input1').value 

    for (let i = 0; i <= a ; i++){
        if (a % i == 0){
            console.log(i)
        }
    }
}