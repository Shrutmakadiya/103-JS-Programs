let a = prompt("Enter string :")
function ans(a){
    if(a.startsWith('S') && a.endsWith('T')){
        document.write("Your string is start with S and end with T")
    }
    else if(a.startsWith('S')){
        document.write("Your string is start with S but not end with T")
    }
    else if(a.endsWith('T')){
        document.write("Your string is not start with S but end with T")
    }
    else{
        document.write("Your string is not start with S and not end with T")
    }
}
ans(a)
