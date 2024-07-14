function solution(number, limit, power) {
  let weapon = [];
  for (let i = 1; i <= number; i++) {
    let cnt = 1;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) cnt++;
    }
    weapon.push(cnt);
  }
  return weapon
    .map((v) => (v > limit ? (v = power) : v))
    .reduce((a, b) => a + b);
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
