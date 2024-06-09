const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [ur,tr,uo,to] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(56*ur+24*tr+14*uo+6*to);