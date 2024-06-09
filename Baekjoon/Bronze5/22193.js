const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim());

console.log((BigInt(input[1])*BigInt(input[2])).toString());