const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output = 0;
for(let i=1;i<=input;i++){
    output+=i;
}
console.log(output);