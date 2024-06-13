const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c,d] = fs.readFileSync(filePath).toString().split('\n').map(Number);

let time = a+b+c+d;
console.log(parseInt(time/60));
console.log(parseInt(time%60));