// Print sum of subarray from specified index
//  index is 2
const arr = [1, 2, 3, 4, 5];

// Brute force approach to find the sum of all subarrays of an array
// Time complexity: O(n^2)
// Space complexity: O(1)
// This function prints the sum of all subarrays starting from a specified index

const findSumOfAllSubArrays = (arr, index) => {
    let sum = 0;
  for (let i = index; i < arr.length; i++) {
    // for (let j = index; j <= i; j++) {
      sum += arr[i];
    // }
    console.log(`Subarray: ${arr.slice(index, i + 1)}, Sum: ${sum}`);
  }
};
findSumOfAllSubArrays(arr, 2); // Subarrays and their sums
// Output: Subarray: [ 3 ], Sum: 3
//         Subarray: [ 3, 4 ], Sum: 7
//         Subarray: [ 3, 4, 5 ], Sum: 12
