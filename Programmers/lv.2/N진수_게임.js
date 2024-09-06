function solution(n, t, m, p) {
  let number = "";

  let i = 0;
  while (number.length <= (t - 1) * m + p) {
    number += i.toString(n);
    i++;
  }
  console.log(number);
}
//진행중
