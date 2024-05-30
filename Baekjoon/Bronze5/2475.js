const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c,d,e] = fs.readFileSync(filePath).toString().split(' ').map(Number);

console.log((a*a+b*b+c*c+d*d+e*e)%10);
