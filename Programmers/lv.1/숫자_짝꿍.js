function solution(X, Y) {
  let bf = [];
  const x = X.split("").map(Number);
  const y = Y.split("").map(Number);

  for (let i = 0; i < 10; i++) {
    let filterX = [];
    let filterY = [];
    filterX = x.filter((v) => +v === i);
    filterY = y.filter((v) => +v === i);

    filterX.length <= filterY.length
      ? bf.push(...filterX)
      : bf.push(...filterY);
  }
  return bf.length === 0
    ? "-1"
    : bf.filter((v) => +v === 0).length === bf.length
    ? "0"
    : bf.sort((a, b) => b - a).join("");
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));
