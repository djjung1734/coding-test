const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [n,...input] = fs.readFileSync(filePath).toString().split('\n').map(f=>f.split(' ').map(Number));

for(let i=0;i<n;i++){
    let output = input[i].sort((a,b)=> b-a);
    console.log(`Case #${i+1}: ${output[0]} `);
}