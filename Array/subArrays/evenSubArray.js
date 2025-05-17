// problem: You are given an integer array A.

// Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.
// Return "YES" if it is possible; otherwise, return "NO" (without quotes).

const evenSubArray = arr => {
  if (
    arr.length % 2 === 0 &&
    arr[0] % 2 === 0 &&
    arr[arr.length - 1] % 2 === 0
  ) {
    return "YES";
  }
  return "NO";
};
console.log(evenSubArray([2, 4, 6, 8])); // YES
console.log(evenSubArray([2, 4, 6, 7])); // NO
