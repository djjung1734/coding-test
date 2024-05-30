const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(f=>f.trim().split(' ').map(Number));

for(let i=0;i<input.length;i++){
    if(input[i][0] > input[i][1]){
        console.log('Yes');
    }else if(input[i][0] === 0 && input[i][1] === 0){
        break;
    }
    else{
        console.log('No');
    }
}
