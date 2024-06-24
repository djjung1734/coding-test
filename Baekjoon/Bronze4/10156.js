const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c] = fs.readFileSync(filePath).toString().split(' ').map(Number);

if(a*b >= c){
    console.log(a*b-c);
}else{
    console.log(0);
}