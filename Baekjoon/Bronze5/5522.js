const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

let output = 0;
for(let i=0;i<5;i++){
    output = output+input[i];
}
console.log(output);