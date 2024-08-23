function solution(progresses, speeds) {
  let answer = [];
  const days = [];

  progresses = progresses.map((v, i) => {
    v = 100 - v;
    days.push(Math.ceil(v / speeds[i]));
  });
  console.log(days);
  for (let i = 1; i < days.length; i++) {}
}

//진행중
