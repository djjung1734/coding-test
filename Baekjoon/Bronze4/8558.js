const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let factorial = 1n;
for(let i=1;i<=+input;i++){
    factorial *= BigInt(i);
}

console.log((factorial%10n).toString());