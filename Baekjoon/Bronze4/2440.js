const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

for(let i = +input;i>0;i--){
    let output = '';
    output += '*'.repeat(i);
    console.log(output);
}