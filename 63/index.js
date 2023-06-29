let date = new Date()
let d = date.getDate()
let m = date.getMonth() + 1
let y = date.getFullYear()

if(d < 10){
  d = '0' + d   
}
if(m < 10){
    m = '0' + m
}
document.write(d + " : "+ m + " : "+ y + "<br>")
document.write(d + " / "+ m + " / "+ y + "<br>")