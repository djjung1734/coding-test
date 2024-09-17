function solution(numbers) {
  numbers = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return numbers[0] === "0" ? "0" : numbers;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
