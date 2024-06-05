const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [x,y,w,h] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let output_x = x > w-x ? w-x : x;
let output_y = y > h-y ? h-y : y;

let output = output_x > output_y ? output_y : output_x;
console.log(output);

