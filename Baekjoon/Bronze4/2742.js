const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output = '';
for(let i = +input; i >= 1; i--){
    
    output += `${i}\n`;
}
console.log(output.trim());

