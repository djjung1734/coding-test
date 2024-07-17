function solution(N, stages) {
  let failure = [];
  let rank = [];
  let stage = stages.length;
  for (let i = 1; i <= N; i++) {
    let fail = 0;
    fail = stages.filter((v) => v === i).length;
    failure.push([stage === 0 ? 0 : fail / stage, i]);
    stage -= fail;
  }
  failure.sort((a, b) => b[0] - a[0]).map((v) => rank.push(v[1]));
  return rank;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
