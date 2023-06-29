function split(array,chunk){
  while(array.length > 0)
  {
    let ans = array.splice(0,chunk)
    document.write(ans + "<br>")
  }
}
let array = [1,2,3,4,5,6,7,8,9,10,11]
let chunk = [1]
split(array,chunk)