function solution(lottos, win_nums) {
  let known = [];
  let unknown = [];
  const rank = [6, 6, 5, 4, 3, 2, 1];

  known = lottos.filter((v, i) => win_nums.includes(v));
  unknown = lottos.filter((v) => v === 0);

  return [rank[known.length + unknown.length], rank[known.length]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
