function remove(array){
    let a = [...new Set(array)]
    return a
}
let arr = ["s" , "s" , "h" , "h", "r" , "r" , "u" , "t"] 
document.write(`[${arr}] <br><br>`)
let finalArray = remove(arr)
document.write(`[${finalArray}]`)