const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output = [];
for(let i=0;i<input.length;i++){
    if(input[i]===input[i].toLowerCase()){
        output.push(input[i].toUpperCase());
    }else{
        output.push(input[i].toLowerCase());
    }
}
console.log(output.join(''));
