function removeJoint(arr1,arr2){
    let b = arr1.concat(arr2)
    let a = [... new Set(b)]
    document.write(a)
}

array1 = [1,2,3,4,5,6,1,3,4]
array2 = [1,2,3,4,5,5,6,7,8,1,9,3,10]
document.write(array1 + "<br>")
document.write(array2 + "<br><br>")
removeJoint(array1,array2)