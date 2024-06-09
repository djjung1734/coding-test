const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [n,s] = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim());

let output = s.split('').filter(f=>f==='a'||f==='e'||f==='i'||f==='o'||f==='u');
console.log(output.length);