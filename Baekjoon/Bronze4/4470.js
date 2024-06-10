const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=1;i<=+input[0];i++){
    console.log(`${i}. ${input[i]}`);
}