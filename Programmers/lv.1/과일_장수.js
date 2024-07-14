function solution(k, m, score) {
  let answer = 0;
  let box = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    box = score.slice(i, i + m);
    if (box.length === m) answer += box[m - 1] * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
