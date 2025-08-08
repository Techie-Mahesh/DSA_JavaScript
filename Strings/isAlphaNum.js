const isAlphaNum = strArr => {
  for (let i = 0; i < strArr.length; i++) {
    if (
      (strArr[i] >= "A" && strArr[i] <= "Z") ||
      (strArr[i] >= "a" && strArr[i] <= "z") ||
      (strArr[i] >= "0" && strArr[i] <= "9")
    ) {
      continue;
    }else{
        return 0
    }

  }
  return 1
};

console.log(isAlphaNum(["S", "c", "a", "L", "e", "r", "#", "2", "0", "2", "0"])); // 0
console.log(isAlphaNum(["S", "c", "a", "L", "e", "r", "2", "0", "2", "0"])); // 1
