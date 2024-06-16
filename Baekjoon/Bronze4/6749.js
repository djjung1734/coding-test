const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [third,second] = fs.readFileSync(filePath).toString().split('\n').map(Number);

const first = second*2 - third;

console.log(first);