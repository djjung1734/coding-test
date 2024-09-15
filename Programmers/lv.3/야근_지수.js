function solution(n, works) {
  let answer = 0;
  works.sort((a, b) => b - a);

  if (works.reduce((a, b) => a + b) <= n) return 0;

  while (n !== 0) {
    for (let i = 0; i < works.length; i++) {
      if (works[i] >= works[0]) {
        n--;
        works[i]--;
      }
      if (n === 0) break;
    }
  }

  answer = works.reduce((a, b) => a + b ** 2, 0);

  return answer;
}

console.log(solution([4, 3, 3], 4));
console.log(solution([2, 1, 2], 1));
console.log(solution([1, 1], 3));
