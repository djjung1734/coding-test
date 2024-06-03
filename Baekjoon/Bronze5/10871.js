const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim().split(' ').map(Number));

const num = input[0][0];
const x = input[0][1];
let output = input[1].filter(f=>f < x);

console.log(output.join(' '));