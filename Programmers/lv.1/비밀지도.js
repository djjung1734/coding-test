function solution(n, arr1, arr2) {
  let arr = arr1.map((v, i) => v | arr2[i]);

  return arr.map((v) =>
    v.toString(2).padStart(n, 0).replaceAll(1, "#").replaceAll(0, " ")
  );
}

console.log(solution(4, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
