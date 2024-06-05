// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
// let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate();

console.log(year);
console.log(month+1);
console.log(date);