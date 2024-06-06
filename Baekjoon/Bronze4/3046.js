const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [r1,s] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(2*s-r1);