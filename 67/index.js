function remove(array,n){
    let arr = []
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] !== n){
            arr.push(array[i])
        }
    }
    return arr;
}
document.write(["a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i"] + "<br>")
document.write(remove(["a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i"],"d"))