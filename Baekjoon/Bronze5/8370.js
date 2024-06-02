const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(input[0]*input[1]+input[2]*input[3]);