const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [k,w,m] = fs.readFileSync(filePath).toString().split(' ').map(Number);

if((w-k)%m === 0){
    console.log(parseInt((w-k)/m));
}else{
    console.log(parseInt((w-k)/m)+1);
}