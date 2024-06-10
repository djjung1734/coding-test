const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(f=>f.split(' ').map(Number));

let n = +input[0][0];

console.log('Gnomes:');
for(let  i=1;i<=n;i++){
    let output = [...input[i]];
    let tuptuo = [...input[i]];
    output.sort((a,b) => a-b);
    tuptuo.sort((a,b) => b-a);
   
    if(JSON.stringify(input[i]) === JSON.stringify(output) || JSON.stringify(input[i]) === JSON.stringify(tuptuo)){
        console.log('Ordered');
    }else{
        console.log('Unordered');
    }
}
