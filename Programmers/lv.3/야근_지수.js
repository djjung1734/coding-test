function solution(n, works) {
  let answer = 0;
  works.sort((a, b) => b - a);

  if (works.reduce((a, b) => a + b) > n) {
    for (let i = 0; i < n; i++) {
      works[works.indexOf(Math.max(...works))]--;
    }
    answer = works.map((v) => v ** 2).reduce((a, b) => a + b);
  }
  return answer;
}

console.log(solution([4, 3, 3], 4));
console.log(solution([2, 1, 2], 1));
console.log(solution([1, 1], 3));

//효율성 통과 못함
