function solution(arr) {
  let n = 1;

  arr.sort((a, b) => b - a);
  while (1) {
    let multiple = arr[0] * n;
    let filtered = [];
    filtered = arr.filter((v) => multiple % v !== 0);
    if (filtered.length === 0) {
      break;
    }
    n++;
  }
  return arr[0] * n;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
