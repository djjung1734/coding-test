const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

for(let i=1;i<=9;i++){
    console.log(`${input} * ${i} = ${input*i}`);
}