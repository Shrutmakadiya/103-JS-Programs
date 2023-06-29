arr1 = [1,2,3,4,5,6]
arr2 = [1,2,3,4,5,6]

if(arr1.length !== arr2.length){
  let result = false
}
else{
  let result = false
  for(let i = 0 ; i < arr1 ; i++){
    if(arr1[i] !== arr2[i]){
      let result = false
    }
    else{
      result = true
    }
  }
}

document.write(`[${arr1}]` + "<br>")
document.write(`[${arr2}]` + "<br><br>")
if(result = true){
  document.write("Both array are same. ")
}
else{
 document.write("Both array are not same. ") 
}