const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c] = fs.readFileSync(filePath).toString().split(' ').map(Number);

if(a === b && b === c && c === a){
    console.log(2);
}else if(a*a + b*b === c*c || a*a + c*c === b*b || b*b + c*c === a*a){
    console.log(1);
}else{
    console.log(0);
}