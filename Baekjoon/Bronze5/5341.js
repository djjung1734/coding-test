const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

for(let i=0;i<input.length;i++){
    if(input[i] === 0){
        break;
    }else{
        let output = 0;
        for(let j=1;j<=input[i];j++){
            output=output+j;
        }
        console.log(output);
    }
}