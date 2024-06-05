const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [p, q] = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(q-p, q);