function solution(operations) {
  let arr = [];
  for (let i = 0; i < operations.length; i++) {
    operations[i] = operations[i].split(" ");

    if (operations[i][0] === "I") {
      arr.push(+operations[i][1]);
      arr.sort((a, b) => a - b);
    } else if (
      operations[i][0] === "D" &&
      operations[i][1] === "1" &&
      arr.length !== 0
    ) {
      arr.pop();
    } else if (
      operations[i][0] === "D" &&
      operations[i][1] === "-1" &&
      arr.length !== 0
    ) {
      arr.splice(0, 1);
    }
  }
  return arr.length === 0 ? [0, 0] : [arr[arr.length - 1], arr[0]];
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
