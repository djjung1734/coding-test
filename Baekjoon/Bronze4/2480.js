const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [a,b,c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort();

if(a === b && b === c && c === a){
    console.log(10000+a*1000);
}else if(a !== b && b !== c && c !== a){
    console.log(c*100);
}else{
    let same = [a,b,c].filter((v,i) => [a,b,c].indexOf(v) !== i); //인덱스와 요소의 위치가 다른 것을 중복으로 판단
    console.log(1000+same*100);
}