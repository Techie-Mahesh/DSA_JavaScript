// Problem: Given an array of integers, you can pick k elements from the start or end of the array. Find the maximum sum of the k elements you can pick.
// For example, given arr = [5, 4, 3, 2, 1] and k = 3, the maximum sum is 12 (5 + 4 + 3) or (3 + 4 + 5).

// Approach: Use prefix sum to calculate the sum of elements from both ends of the array.
// Iterate through all possible combinations of picking elements from the start and end, and keep track of the maximum sum.

// Time Complexity: O(n) and space complexity: O(n) for prefix sum array

const pickFromBothSides = (arr, k) => {
  let PS = new Array(arr.length);
  PS[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    PS[i] = PS[i - 1] + arr[i];
  }
  console.log(PS);
  let ans = Number.MIN_VALUE;
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    if (i === 0) {
      sum = PS[arr.length - 1] - PS[arr.length - 1 - (k - i)];
      console.log(sum);
    } else {
      sum = PS[i - 1] + PS[arr.length - 1] - PS[arr.length - 1 - (k - i)];
      console.log(i, sum);
    }

    ans = Math.max(sum, ans);
  }
  return ans;
};

console.log(pickFromBothSides([5, 4, 3, 2, 1], 3)); // 12 (3+4+5)

console.log("-------------------------------------------------");

