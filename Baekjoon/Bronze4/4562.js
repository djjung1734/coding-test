const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

let n = +input[0][0];

for(let  i=1;i<=n;i++){
    if(input[i][0] >= input[i][1]){
        console.log('MMM BRAINS');
    }else{
        console.log('NO BRAINS');
    }
}