const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let [antenna, eye] = fs.readFileSync(filePath).toString().split('\n').map(Number);

if(antenna >= 3 && eye <= 4){
    console.log('TroyMartian');
}
if(antenna <= 6 && eye >= 2){
    console.log('VladSaturnian');
}
if(antenna <= 2 && eye <= 3){
    console.log('GraemeMercurian');
}