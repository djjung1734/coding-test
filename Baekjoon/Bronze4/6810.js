const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const n = 9780921418;
let output = 0;

const arr10 = n.toString().split('').map(Number);
const arr13 = [...arr10, ...input];

for(let i=0;i<arr13.length;i++){
    if(i%2 === 1){
        arr13[i] = arr13[i]*3;
    }
    output+=arr13[i];
}

console.log(`The 1-3-sum is ${output}`);