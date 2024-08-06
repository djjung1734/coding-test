function solution(people, limit) {
  let cnt = 0;
  people = people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      cnt++;
      i++;
      j--;
    } else {
      cnt++;
      j--;
    }
  }
  return cnt;
}

console.log(solution([70, 50, 80, 50]));
console.log(solution([70, 80, 50]));
