// function solution(s) {
//   s = s.split("");
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       s.splice(i, 2);
//       i -= 2;
//     }
//   }
//   return s.length === 0 ? 1 : 0;
// }

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
