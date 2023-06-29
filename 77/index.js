function arr(a,b){
  let array = []
  for (let i = 0 ; i < a ; i++){
    for(let j=0 ; j < b ; j++){
      array[i] = ["[ ]"]
    }
  }
for(let i = 0 ; i < a ; i++){
  for(let j = 0 ; j < b ; j++){
    array[i][j] = j
  }
}
return array
}
let a = 7
let b = 7
document.write(arr(a,b))
console.log(arr(a,b))