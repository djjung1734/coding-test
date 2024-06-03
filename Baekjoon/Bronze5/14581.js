const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

console.log(':fan::fan::fan:');
console.log(`:fan::${input}::fan:`);
console.log(':fan::fan::fan:');