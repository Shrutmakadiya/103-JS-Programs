function empty(arr){
    arr = []
    return arr;
}
let a = [1,2,3,4]
let b = empty(a)
console.log(b)
document.write("["+a+"]" + "<br>")
document.write("after call empty function array is empty" + "<br>")
document.write("["+b+"]")