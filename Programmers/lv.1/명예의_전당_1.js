function solution(k, score) {
  let arr = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => a - b);
    arr.length <= k ? answer.push(arr[0]) : answer.push(arr[arr.length - k]);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
