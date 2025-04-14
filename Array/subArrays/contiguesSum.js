const maxSumOfSubArray = arr => {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    sum += arr[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maxSumOfSubArray([1, -2, 3, 4, -1, 2])); // 8
console.log(maxSumOfSubArray([1, 2, 3, 4, -10])); // 10
console.log(maxSumOfSubArray([-2, -3, -1, -5]));
