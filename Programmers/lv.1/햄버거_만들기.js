function solution(ingredient) {
  let cnt = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      cnt++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return cnt;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
