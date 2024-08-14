function solution(s) {
  let answer = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    s.forEach((v) => {
      if (stack.length === 0) {
        stack.push(v);
      } else {
        if (stack[stack.length - 1] === "[" && v === "]") {
          stack.pop();
        } else if (stack[stack.length - 1] === "{" && v === "}") {
          stack.pop();
        } else if (stack[stack.length - 1] === "(" && v === ")") {
          stack.pop();
        } else {
          stack.push(v);
        }
      }
    });
    if (stack.length === 0) answer++;
    s.push(s.shift());
  }
  return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
