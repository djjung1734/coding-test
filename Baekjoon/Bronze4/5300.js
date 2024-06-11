const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output = '';
for(let i=1;i<=+input;i++){
    output+=`${i} `;
    if(i%6 === 0 || i===+input){
        output+='Go! ';
    }
}
console.log(output.trim());