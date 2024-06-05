const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().toLowerCase().trim().split('\n').map(f=>f.trim().split(''));

for(let i=0;i<input.length-1;i++){
    let output = [];
    output = input[i].filter(f => f === 'a' ||f === 'e' ||f === 'i' ||f === 'o' ||f === 'u');
    console.log(output.length);
}