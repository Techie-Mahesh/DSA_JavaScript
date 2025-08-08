const sumOfSubArray = (arr, start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfSubArray([1, 2, 3, 4, 5], 1, 3)); // 9 (2 + 3 + 4)
