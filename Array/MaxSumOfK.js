// Description: Find the maximum sum of k consecutive elements in an array.
// Example: Given arr = [1, 2, 8, 9, 3, 20, 4, 5, 6, 7, 8, 9] and k = 3, the maximum sum is 32 (20 + 9 + 3).
const maxSumOfNNumbers = (arr, k) => {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};
// const maxSumOfNNumbers = (arr, k) => {
//   let maxSum = 0;
//   for (let i = 0; i <= arr.length - k; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + k; j++) {
//       currentSum += arr[j];
//     }
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     }
//   }
//   return maxSum;
// };
// console.log(maxSumOfNNumbers([1, 2, 8, 9, 3, 20, 4, 5, 6, 7, 8, 9], 3));
console.log(maxSumOfNNumbers([5, 7, 6, 3, 1, 20, 2, 3, 4, 7, 6, 4], 3));
console.log(maxSumOfNNumbers([1, 2, 8, 9, 3, 20, 4, 5, 6, 7, 8, 9], 3));
