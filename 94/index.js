function* myfunction(a,b){
    for(let i=a ; i<=b ; i++){
        yield i;
    }
}

function myfunction2 (a,b){
    if(typeof a === "string"){
        let result = [...myfunction(a.charCodeAt(), b.charCodeAt())].map(n=>String.fromCharCode(n))
        document.write(result+"<br>")
    }
    else{
        let result = [...myfunction(a,b)]
        document.write(result+"<br>")
    }
}
myfunction2(1,18)
myfunction2("a","z")