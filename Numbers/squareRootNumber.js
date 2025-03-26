const getSquareRoot = num => {
  if (num < 0) return NaN;
  if (num === 0) return 0;
  for (let i = 1; i <= num / 2; i++) {
    if (i * i === num) return i;
    if (i * i > num) return -1;
  }
};
console.log(getSquareRoot(10)); // 3
console.log(getSquareRoot(161)); // 4

const getSquareRootBinary = num => {
  if (num < 0) return NaN;
  if (num === 0) return 0;
  let low = 1,
    high = num / 2,
    result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let square = mid * mid;
    if (square === num) return mid;
    if (square < num) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
};
console.log(getSquareRootBinary(10)); // 3
console.log(getSquareRootBinary(161)); // 4
console.log(getSquareRootBinary(0)); // 0
console.log(getSquareRootBinary(-1)); // NaN
console.log(getSquareRootBinary(9)); // 1
