const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(a+b+c);