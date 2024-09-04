function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length - 1; i++) {
    if (/^[a-z]{2}$/g.test(str1[i] + str1[i + 1])) {
      arr1.push(str1[i] + str1[i + 1]);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (/^[a-z]{2}$/g.test(str2[i] + str2[i + 1])) {
      arr2.push(str2[i] + str2[i + 1]);
    }
  }

  let intersection = 0;

  arr1.forEach((v) => {
    for (let j = 0; j < arr2.length; j++) {
      if (v === arr2[j]) {
        arr2.splice(j, 1);
        intersection++;
        break;
      }
    }
  });

  let union = arr1.length + arr2.length;

  return union === 0 ? 65536 : parseInt((intersection / union) * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
//시간 초과
