const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim().split(' ').map(Number));

for(let i=1;i<=input[0][0];i++){
    console.log(input[i][0]+input[i][1]);
}