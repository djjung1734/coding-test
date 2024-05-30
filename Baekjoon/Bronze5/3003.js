const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c,d,e,f] = fs.readFileSync(filePath).toString().split(' ').map(Number);

let output = [1-a, 1-b, 2-c, 2-d, 2-e, 8-f];
console.log(output.toString().replaceAll(',', ' '));