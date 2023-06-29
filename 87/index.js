function makeSet(a,b){
    let x = new Set(a)
    for(let i of b){
        x.add(i)
    }
    return x
}
let Bat = new Set(['Rohit', 'Gill', 'Kohali', 'Surya', 'Kl Rahul', 'Hardik', 'Jadeja', 'Ashwin'])
let BOll = new Set(['Hardik' , 'Jadeja' , 'Ashwin', 'Bhuvneshwar', 'Shami', 'Bumrah'])

let result = makeSet(Bat, BOll)

document.write("Batsman => " + Bat  + "<br>")
document.write("Boller => " + BOll + "<br>")
document.write("Playing 11 => " + result)
console.log(result)