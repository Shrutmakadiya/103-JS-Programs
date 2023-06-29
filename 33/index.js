let a = (prompt('Enter a character : '));
let arr = a.split('')
let rev = arr.reverse()
let revstring = rev.join('')
if (a == revstring){
    document.write(a+ " String is palingdrom")
}
else{
    document.write(a+" string is not palingdrom")   
}