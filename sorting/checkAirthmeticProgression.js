const checkArithmeticProgression = arr => {
  arr = arr.sort((a, b) => b - a);
  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return 0;
    }
  }
  return 1;
};

console.log(checkArithmeticProgression([1, 3, 5, 9, 7])); // 1
console.log(checkArithmeticProgression([1, 2, 3, 5])); // 0
