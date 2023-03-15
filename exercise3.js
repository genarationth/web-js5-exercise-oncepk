// I DO LOVE ChatGPT jubjub

// NO.1

let x = 99999999999999999999999999;

while (x > 0) {
  console.log(x);
  x -= 0.5;
}

console.log(x);

//////////////////////////////////////////////////////////////////////////////////////////

// NO.2

let num = 1;

while (num < 99) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

console.log(num);

//////////////////////////////////////////////////////////////////////////////////////////

// NO.3

const prompt = require("prompt-sync")();

function x() {
  let n = Number(prompt("Enter some number: "));
  let i = 1;
  while (i <= n) {
    console.log(`[${i}]`);
    i++;
  }
}

console.log(x());


//////////////////////////////////////////////////////////////////////////////////////////

// NO.4

function x(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(x(99999999999999999999999999999999999999999999999999));
console.log(x(99999999999999999999999999999999999999999999999999));

