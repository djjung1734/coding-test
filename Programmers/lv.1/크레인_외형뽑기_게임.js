function solution(board, moves) {
  let dolls = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        dolls.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  const originalDolls = dolls.length;
  for (let i = 0; i < dolls.length - 1; i++) {
    if (dolls[i] === dolls[i + 1]) {
      dolls.splice(i, 2);
      i -= 2;
    }
  }
  return originalDolls - dolls.length;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
