function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
      answer.sort((a, b) => a - b);
    }
  }
  return answer.filter((v, i) => answer.indexOf(v) === i);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
