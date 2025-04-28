// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// https://leetcode.com/problems/move-zeroes/description/

const moveNonZeros = arr => {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
      nonZeroIndex++
    }
  }
  return arr;
};
console.log(moveNonZeros([0,0, 1, 0, 3, 12]));
