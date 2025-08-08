// problem: Given an array of integers and a number K
// find the maximum sum of a subarray which is less than or equal to k

// Example: Input: [1,4, 3, 7,10], k = 6
// Output: 5

// Explanation: The subarray [1,4] has the maximum sum of 5 which is less than or equal to 6.
// Time complexity: O(n^2) space complexity: O(n)

const maxSumofSubArray = (arr, k) => {
  let ps = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    ps[i] = arr[i] + (ps[i - 1] || 0);
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      if (i === 0) {
        sum = ps[j];
      } else {
        sum = ps[j] - ps[i - 1];
      }
      if (sum <= k) {
        max = Math.max(max, sum);
      }
    }
  }
  return max;
};

console.log(maxSumofSubArray([1, 4, 3, 7, 10], 6)); //5

console.log("---------------------------------------------------");

// carry forward the previous code to make it more efficient

const maxSumofSubArray2 = (arr, k) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= k && sum > max) {
        max = Math.max(max, sum);
      }
      if (sum > k) {
        break; // exit the loop if sum exceeds k
      }
    }
  }
  return max;
};

console.log(maxSumofSubArray2([1, 4, 3, 7, 10], 6)); //5
console.log(maxSumofSubArray2([3, 3, 3], 2)); // 0
