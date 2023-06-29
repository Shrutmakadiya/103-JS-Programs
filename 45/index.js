const person = {
    name : 'Shrut',
    age : 19,
    study : "CSE"
}

for(let [key,value] of Object.entries(person)){
    document.write(key + " = " + value + "<br>")
}