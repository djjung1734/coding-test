const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(BigInt);

const n = input[0];
const m = input[1];

console.log((n/m).toString());
console.log((n%m).toString());
