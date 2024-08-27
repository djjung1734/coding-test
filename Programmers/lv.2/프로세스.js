function solution(priorities, location) {
  let answer = 0;
  const queue = [];

  while (priorities.length !== 0) {
    if (Math.max(...priorities) > priorities[0]) {
      priorities.push(priorities[0]);
      priorities.shift();
      location = location === 0 ? priorities.length - 1 : location - 1;
    } else {
      queue.push(priorities[0]);
      priorities.shift();
      answer++;
      location--;
    }
    if (location === -1) break;
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
