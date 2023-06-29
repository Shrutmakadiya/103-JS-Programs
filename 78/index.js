function extract(array,value){
  let extract = array.map(item => item[value])
  return extract  + "<br>"
}

const objectArray = [{a:1 , b:2},{a:" kohali 9000+ runs" , b : " rohit 5000+ runs"}]
document.write(extract(objectArray , `a`))
document.write(extract(objectArray , 'b'))