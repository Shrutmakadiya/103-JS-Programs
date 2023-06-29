const a = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {

    const result = i * a;

   document.write(`${a} * ${i} = ${result} <br>`);
}