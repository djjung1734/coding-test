function solution(n, lost, reserve) {
  let cnt = 0;
  let r_lost = [];
  let r_reserve = [];
  lost.sort();
  r_lost = lost.filter((v) => !reserve.includes(v));
  r_reserve = reserve.filter((v) => !lost.includes(v));
  for (let i = 0; i < r_lost.length; i++) {
    if (r_reserve.includes(r_lost[i] - 1)) {
      cnt++;
      r_reserve = r_reserve.filter((v) => v !== r_lost[i] - 1);
    } else if (r_reserve.includes(r_lost[i] + 1)) {
      cnt++;
      r_reserve = r_reserve.filter((v) => v !== r_lost[i] + 1);
    }
  }
  return n - (r_lost.length - cnt);
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
