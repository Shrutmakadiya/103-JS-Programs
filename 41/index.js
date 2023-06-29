let person = {
    name:'Shrut',
    age : 19,
    x : {
        study : "CSE"
    }
}
document.write("PLEASE CHECK CONSOLE.")
console.log(person)
delete person['x']
delete person.age
console.log(person)