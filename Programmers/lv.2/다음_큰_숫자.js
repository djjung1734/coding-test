function solution(n) {
  let answer = n + 1;

  while (
    n.toString(2).split(0).join("").length !==
    answer.toString(2).split(0).join("").length
  ) {
    answer++;
  }

  return answer;
}

console.log(solution(78));
console.log(solution(15));
