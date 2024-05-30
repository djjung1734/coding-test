const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(BigInt);

const a = input[0];
const b = input[1];

if(a > b)
    console.log('>');
else if(a < b)
console.log('<');
else
console.log('==');