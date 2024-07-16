function solution(n, m, section) {
  let answer = 0;
  let paint = 0;
  section.forEach((v, i) => {
    if (paint < v) {
      answer++;
      paint = v + m - 1;
    }
  });
  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
