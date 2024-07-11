function solution(cards1, cards2, goal) {
  let string = [];
  goal.map((v) => {
    if (v === cards1[0]) {
      string.push(...cards1.splice(0, 1));
    } else if (v === cards2[0]) {
      string.push(...cards2.splice(0, 1));
    }
  });
  return JSON.stringify(goal) === JSON.stringify(string) ? "Yes" : "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
