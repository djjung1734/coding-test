function solution(n) {
  let f1 = 0n;
  let f2 = 1n;
  let fn = 0n;

  for (let i = 0; i < n; i++) {
    fn = f1 + f2;
    f1 = f2;
    f2 = fn;
  }
  return (fn % 1234567n).toString();
}

console.log(solution(4));
console.log(solution(3));
