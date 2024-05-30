const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

let output = 0;
if((input%4===0 && input%100 !== 0)||input%400===0){
    output = 1;
}
console.log(output);