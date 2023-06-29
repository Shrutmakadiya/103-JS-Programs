function myfunction(v1,v2){
  return v1.salary - v2.salary
}
let a = [{name : 'virat kohali' , salary : 9000}, {name : 'rohit sharma' , salary : 8145} , {name : 'kl rahul' , salary : 6548}]
console.log(a.sort(myfunction))
