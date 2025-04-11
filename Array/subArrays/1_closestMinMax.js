// Problem: Given an array of integers, find the length of the smallest subarray that contains both the minimum and maximum elements of the array. 
// If the array is empty or has only one element, return 0.


// Approach: Use two nested loops to find the minimum and maximum elements, and then find the length of the smallest subarray that contains both elements.
// // Time Complexity: O(n^2) and space complexity: O(1)

const closestMinMax = arr => {
  let min = arr[0];
  let max = arr[0];
  let res = arr.length;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] === min) {
          res = Math.min(res, j - i + 1);
          break;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] === max) {
          res = Math.min(res, j - i + 1);
          break;
        }
      }
    }
  }
  return res;
};

console.log(closestMinMax([1, 2, 3, 4, 5])); // 5
console.log(closestMinMax( [2, 6, 1, 6, 9])); // 3

console.log("--------------------------------------------------");

// optimized approach: O(n) and space complexity: O(1)
