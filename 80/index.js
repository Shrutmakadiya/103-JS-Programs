function itemGenerate(array){
  const randomItem = Math.floor(Math.random() * array.length)
  let a = array[randomItem]
  return a
}
let arr = [1,2,3,4,5,6,7,8,9,10]
document.write(itemGenerate(arr))