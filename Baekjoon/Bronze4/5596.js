const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

const minguk = input[0];
const mansae = input[1];
let s = 0;
let t = 0; 

for(let i=0;i<4;i++){
    s += minguk[i];
    t += mansae[i];
}

if(s >= t){
    console.log(s);
}
else{
    console.log(t);
}
