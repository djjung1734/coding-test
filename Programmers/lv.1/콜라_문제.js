function solution(a, b, n) {
  let coke = 0;
  let left = n;

  while (left >= a) {
    let empty = 0;
    empty = parseInt(left / a) * b;
    left = empty + (left % a);
    coke += empty;
  }
  return coke;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
