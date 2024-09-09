function solution(n, t, m, p) {
  let number = "";
  let arr = [];

  let i = 0;
  while (number.length <= (t - 1) * m + p) {
    number += i.toString(n);
    i++;
  }
  for (let j = 0; j < number.length; j++) {
    if (j % m === p - 1) {
      arr.push(number[j]);
    }
  }
  arr = arr.slice(0, t);

  return arr.join("").toUpperCase();
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
