const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [n1,n2,n12] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(parseInt((n1+1)*(n2+1)/(n12+1)-1));