// Find the longest consecuting 1 in an array by replacing only one element with 1 for 0
// Given an array of 0s and 1s, find the longest consecutive sequence of 1s that can be obtained by flipping at most one 0 to 1.

const consecutiveone = arr => {
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    left[i] = arr[i] === 1 ? (left[i - 1] || 0) + 1 : 0;
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    right[j] = arr[j] === 1 ? (right[j + 1] || 0) + 1 : 0;
  }
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === 0) {
      max = Math.max(max, left[k - 1] + right[k + 1] + 1);
    }
  }
  return max;
};
console.log(consecutiveone([1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1]));

console.log("----------------------------------------");

const consecutiveone2 = arr => {
  let max = 0; // To store the maximum length of consecutive 1s
  let leftCount = 0; // Count of consecutive 1s to the left of the current 0
  let rightCount = 0; // Count of consecutive 1s to the right of the current 0
  let totalOnes = 0; // Total number of 1s in the array

  // Count the total number of 1s in the array
  for (let num of arr) {
    if (num === 1) totalOnes++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // Count consecutive 1s to the left of the current 0
      leftCount = 0;
      for (let j = i - 1; j >= 0 && arr[j] === 1; j--) {
        leftCount++;
      }

      // Count consecutive 1s to the right of the current 0
      rightCount = 0;
      for (let j = i + 1; j < arr.length && arr[j] === 1; j++) {
        rightCount++;
      }

      // Calculate the maximum length of consecutive 1s by flipping this 0
      max = Math.max(max, leftCount + rightCount + 1);
    }
  }

  // If there are no 0s in the array, the maximum length is the total number of 1s
  return arr.includes(0) ? max : totalOnes;
};

console.log(consecutiveone2([1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1])); // Output: 8
console.log(consecutiveone2([1, 1, 1, 1])); // Output: 4
console.log(consecutiveone2([0, 0, 0, 0])); // Output: 1
console.log(consecutiveone2([1, 0, 1, 1, 0, 1])); // Output: 4
