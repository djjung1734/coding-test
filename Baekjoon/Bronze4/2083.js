const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim().split(' '));

for(let i=0;i<input.length-1;i++){
    if(input[i][1] > 17 || input[i][2] >= 80){
        console.log(`${input[i][0]} Senior`);
    }else{
        console.log(`${input[i][0]} Junior`);
    }
}