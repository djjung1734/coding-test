const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [add,sub] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let a = (sub+add)/2;
let b = (add-sub)/2;

if((add+sub)%2==1||add<sub){
    console.log(-1);
}else{
    console.log(a,b);
}
