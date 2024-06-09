const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output1 = input - input*0.22;
let output2 = input - input*0.2*0.22;

console.log(output1, output2);