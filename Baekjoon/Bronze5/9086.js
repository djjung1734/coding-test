const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [num,...input] = fs.readFileSync(filePath).toString().split('\n').map(f=>f.trim());

for(let i=0;i<Number(num);i++){
    let output=[];
    if([...input[i]].length === 1){
        output = [input[i][0],input[i][0]];
        console.log(output.join(''));
    }else{
        output = [input[i][0],input[i][input[i].length-1]];
        console.log(output.join(''));
    }
}