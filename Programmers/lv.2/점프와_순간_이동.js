function solution(n) {
  let jump = 0;

  while (n !== 0) {
    if (n % 2 === 1) {
      jump++;
      n--;
    } else {
      n /= 2;
    }
  }
  return jump;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
