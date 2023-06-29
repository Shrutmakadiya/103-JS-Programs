const person = {
    name : 'Shrut',
    age : 19,
    study : "CSE"
}

const companyName ={
    Company :"Trinity Infosystem"
}

const n = Object.assign(person, companyName)

document.write("Check console.")
console.log(n)