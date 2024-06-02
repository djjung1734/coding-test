const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(f=>f.trim());

const total = +input[0];
const n = +input[2];
const num = input[1].split(' ').map(Number);
console.log(num.filter(f=> f === n).length);