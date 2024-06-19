const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [x,y] = fs.readFileSync(filePath).toString().split('\n').map(Number);

for(let i=x;i<=y;i=i+60){
    console.log(`All positions change in year ${i}`)
}