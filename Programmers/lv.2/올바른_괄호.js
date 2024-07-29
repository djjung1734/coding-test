function solution(s) {
  let cnt = 0;
  let answer = true;
  s = s.split("");
  s.map((v) => {
    v === "(" ? cnt++ : cnt--;
    if (cnt < 0) answer = false;
  });
  if (cnt > 0) answer = false;
  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
