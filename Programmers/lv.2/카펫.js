function solution(brown, yellow) {
  let n = 1;
  let answer = [];

  while (n <= yellow) {
    if (yellow % n === 0 && (n + 2) * (yellow / n + 2) === brown + yellow) {
      answer = [yellow / n + 2, n + 2];
      break;
    }
    n++;
  }
  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
