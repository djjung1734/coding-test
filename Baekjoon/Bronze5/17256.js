const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim().split(' ').map(Number));

console.log(input[1][0]-input[0][2],input[1][1]/input[0][1],input[1][2]-input[0][0]);