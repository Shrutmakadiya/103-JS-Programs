const array = ['virat', 'rohit', 'sachin', 'rahul'];

let a = prompt("Enter a cricketer name.")
const hasValue = array.includes(a);

if(hasValue) {
    document.write('Array contains a value.');
} else {
    document.write('Array does not contain a value.');
}