// function solution(numbers) {
//   const answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let num = 0;
//     for (let j = 0; j < numbers.length; j++) {
//       if (i >= j) continue;
//       if (numbers[i] < numbers[j]) {
//         num = numbers[j];
//         break;
//       }
//     }
//     num === 0 ? answer.push(-1) : answer.push(num);
//   }
//   return answer;
// }

function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
