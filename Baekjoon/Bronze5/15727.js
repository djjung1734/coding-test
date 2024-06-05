const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

if(input%5 === 0){
    console.log((BigInt(input)/5n).toString());
}else{
    console.log((BigInt(input)/5n+1n).toString());
}