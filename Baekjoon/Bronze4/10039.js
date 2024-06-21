const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let sum = 0;
for (let i = 0; i < 5; i++) {
  if (input[i] < 40) {
    input[i] = '40';
  }
  sum += Number(input[i]);
}

let result = Math.floor(sum / 5);
console.log(result);