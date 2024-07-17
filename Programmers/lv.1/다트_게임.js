function solution(dartResult) {
  const options = "SDT*#";
  let results = [0, 0, 0];
  let answer = 0;

  dartResult = dartResult
    .split("")
    .map((v, i) => (options.includes(v) ? v : Number(v)));
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < dartResult.length; j++) {
      if (dartResult[j] === 1 && dartResult[j + 1] === 0) {
        results[i] += 10;
        j++;
      } else {
        if (dartResult[j] === "S") {
          results[i] **= 1;
        } else if (dartResult[j] === "D") {
          results[i] **= 2;
        } else if (dartResult[j] === "T") {
          results[i] **= 3;
        } else if (dartResult[j] === "#") {
          results[i] *= -1;
        } else if (dartResult[j] === "*") {
          results[i - 1] *= 2;
          results[i] *= 2;
        } else {
          results[i] += dartResult[j];
        }
        if (!options.includes(dartResult[j + 1])) i++;
      }
    }
  }
  return results.reduce((a, b) => a + b);
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
