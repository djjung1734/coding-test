const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

let output = '';
for(let i=1;i<=input;i++){
    output = output+`${i}\n`;
}
output = output.trim();
console.log(output);