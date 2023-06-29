function append(array , object){
    array.push(object)
    return array
}

let array = [1,2,3,4,5,6,7]
let b = prompt("Enter that want you want as a value")
let object = {1 : b}
console.log(append(array,object))