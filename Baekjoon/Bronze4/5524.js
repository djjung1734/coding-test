const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [,...input] = fs.readFileSync(filePath).toString().split('\n').map(f=>f.trim());

for(let i=0;i<input.length;i++){
    let output = input[i].toLowerCase();
    console.log(output);
}