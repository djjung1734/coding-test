const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt);

let sum = a+b;
console.log(sum.toString());