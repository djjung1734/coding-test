const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

let h = input[0][0];
let m = input[0][1];
let s = input[0][2];

let sum = s+ input[1][0];
m = m+parseInt(sum/60);
sum%=60;
h = h+parseInt(m/60);
m%=60;
h%=24;
console.log(h,m,sum);