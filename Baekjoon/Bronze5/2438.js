const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const star = "*";
let stars = "";

for (i = 0; i < parseInt(input); i++) {
  stars = stars + star;
  console.log(stars);
}
