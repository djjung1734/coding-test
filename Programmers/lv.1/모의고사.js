function solution(answers) {
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let answer = [];
  answers.map((v, i) => {
    if (man1[i % man1.length] === v) cnt1++;
    if (man2[i % man2.length] === v) cnt2++;
    if (man3[i % man3.length] === v) cnt3++;
  });

  if (Math.max(cnt1, cnt2, cnt3) === cnt1) answer.push(1);
  if (Math.max(cnt1, cnt2, cnt3) === cnt2) answer.push(2);
  if (Math.max(cnt1, cnt2, cnt3) === cnt3) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
