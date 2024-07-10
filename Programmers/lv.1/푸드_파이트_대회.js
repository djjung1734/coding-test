function solution(food) {
  const foods = [];
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    let cnt = parseInt(food[i] / 2);
    for (let j = 0; j < cnt; j++) {
      foods.push(i);
    }
  }
  answer = [...foods, 0, ...foods.reverse()].join("");

  return answer;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
