const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

let output = 0;
for(let i=0;i<input.length;i++){
    if(input[i]< 40){
        input[i] = 40;
    }
    output += input[i];
}

console.log(output/5);

