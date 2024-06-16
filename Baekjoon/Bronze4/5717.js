const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(f=>f.split(' ').map(Number));

let result = [];
for(let i=0;i<input.length-1;i++){
    if(input[i][0] === 0 && input[i][1] === 0){
        break;
    }else{
        result.push(input[i][0] + input[i][1]);
    }
}

console.log(result.join('\n'));