const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [n,m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

if(n === m) {
    console.log(1);
}else{
    console.log(0);
}