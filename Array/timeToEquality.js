// Problem Description: Given an array of integers, find the minimum number of operations required to make all elements equal. 
// An operation is defined as incrementing an element by 1.

const timeToEquality = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += max - arr[i];
  }
  return total;
};
console.log(timeToEquality([1, 2, 3])); // 3
