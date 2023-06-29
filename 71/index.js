function ans(arr){
    let a = Array.isArray(arr)

    if(a){
        document.write(`Yes ${arr} is an array. <br>`)
    }
    else{
        document.write(`No ${arr} is not an array. <br>`)
    }
}
const array = [1,2,3,4,5,6]
const array2 = (2,3)
 
document.write(array + "<br>")
document.write(array2  + "<br><br>")
ans(array)
ans(array2)