let a = (prompt('Enter a what you want to convert to revers.'))
function reverse(a){
    return a.split('').reverse().join('');
    }
document.write("Reverse string of "+a+" is "+reverse(a))