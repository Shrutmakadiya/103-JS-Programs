let d1 = new Date()
let d2 = new Date()

document.write(d1 + "<br>")
document.write(d2 + "<br><br>")

const compare1 = d1 < d2
document.write(compare1 + "<br>");

const compare2 = d1 > d2
document.write(compare2 + "<br>")

const compare3 = d1 <= d2
document.write(compare3 + "<br>")

const compare4 = d1 >= d2
document.write(compare4 + "<br>")

const compare5 = d1.getTime() ===  d2.getTime()
document.write(compare5 + "<br>")

const compare6 = d1.getTime() !==  d2.getTime()
document.write(compare6 + "<br>")