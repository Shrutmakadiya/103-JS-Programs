function myfunction(array1, array2){
  let ans = array1.filter(x=>array2.indexOf(x)!== -1)
  return `[${ans}]`
}
let a1 = [1,2,3,4,5,6,7]
let a2 = [7,6,2,2,9,0,5,8,8,9]

document.write(`[${a1}]` + "<br>")
document.write(`[${a2}]` + "<br><br>")

document.write(myfunction(a1,a2))