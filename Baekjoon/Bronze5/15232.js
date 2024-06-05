const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [r,c] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

for(let i=1;i<=r;i++){
    let stars = [];
    for(let j=1;j<=c;j++){
        stars.push('*');
    }
    console.log(stars.join(''));
}