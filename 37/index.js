//1. OBJECT LITERAL
let person = {
    name : "Shrut",
    age : 19,
    x : 
    {
        study : 'CSE'
    }
}

 //2. USING INSTANTS OF OBJECTS
 person = new Object({
    name:'Shrut',
        ages:19,
        x : 
    {
        study : 'CSE'
    }
})

//3.constructor function
function person() {
    this.name = "Shrut",
    this.age = 19,
    this.x = {
        study : 'CSE'   
    }
}
let p = new person()
document.write("You can see all object creation methods in code ")