const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

for(let i=0;i<input.length-1;i++){
    let output = '';
    for(let j=1;j<=input[i];j++){
        output += '*';
        console.log(output);
    }
}