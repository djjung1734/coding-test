const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.trim());

for(let i=1;i<=+input[0];i++){
    let output = input[i].split('');
    let result = [];
    for(let j=0;j<output.length;j++){
        if(result.at(-1)===output[j]){continue;}
        else{result.push(output[j]);}
    }
    console.log(result.join(''));
}
