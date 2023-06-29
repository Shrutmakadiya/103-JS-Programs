const person = {
    name : 'Shrut',
    age : 19,
}

const b = Object.assign({},person)
document.write("using assign method" + "<br>")
document.write(b.name + "<br>")
document.write(b.age + "<br>")

const c = {...person}
document.write("using spread operator "+ "<br>")
document.write(c.name + "<br>")
document.write(c.age + "<br>")