function solution(X, Y) {
  let bf = "";
  const x = X.split("");
  const y = Y.split("");

  for (let i = 0; i < 10; i++) {
    let filterX = 0;
    let filterY = 0;
    filterX = x.filter((v) => +v === i).length;
    filterY = y.filter((v) => +v === i).length;

    bf += i.toString().repeat(Math.min(filterX, filterY));
  }
  return bf.length === 0
    ? "-1"
    : bf.split("").filter((v) => +v === 0).length === bf.length
    ? "0"
    : bf.split("").reverse().join("");
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));
