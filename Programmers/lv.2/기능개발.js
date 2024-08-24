function solution(progresses, speeds) {
  let answer = [];
  const days = [];

  progresses = progresses.map((v, i) => {
    v = 100 - v;
    days.push(Math.ceil(v / speeds[i]));
  });
  for (let i = 0; i < days.length; i++) {
    let cnt = 1;
    while (days[i] >= days[i + 1]) {
      days[i + 1] = days[i];
      cnt++;
      i++;
    }
    answer.push(cnt);
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
