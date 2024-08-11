function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(Math.max(parseInt(i / n), i % n) + 1);
  }
  return arr;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
