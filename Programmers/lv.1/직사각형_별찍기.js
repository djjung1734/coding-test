const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [n,m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let star = '*'.repeat(n);

for(let j=0;j<m;j++){
   console.log(star);
}

//input:5 3