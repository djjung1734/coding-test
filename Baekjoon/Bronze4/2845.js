const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

let [l,p] = input[0];
let member = l*p;
let output = [];

for(let i=0;i<input[1].length;i++){
    output.push(input[1][i]-member);
}
console.log(output.join(' '));