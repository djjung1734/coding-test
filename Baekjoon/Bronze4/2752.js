const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(input.sort((a,b)=>a-b).join(' '));