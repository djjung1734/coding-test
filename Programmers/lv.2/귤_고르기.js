function solution(k, tangerine) {
  const count = [];
  let sum = 0;
  let answer = 0;

  let filtered = tangerine.filter((v, i) => tangerine.indexOf(v) === i);
  filtered.map((value) => {
    let cnt = 0;
    tangerine.map((v) => {
      if (value === v) cnt++;
    });
    count.push(cnt);
  });
  count
    .sort((a, b) => b - a)
    .map((v) => {
      if (sum < k) {
        sum += v;
        answer++;
      }
    });
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
