let string = prompt("Enter string")
    let latter = prompt("Enter latter to check:")
     function check(string,latter){
            const re = new RegExp(latter, 'g');

            let count = string.match(re).length;
            return count;
     }
   
     document.write("Your string has "+check(string,latter)+" "+ latter)