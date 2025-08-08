// Problem: Given an integer array A of size N. You can remove any element from the array in one operation.
// The cost of this operation is the sum of all elements in the array present before this operation.

// Find the minimum cost to remove all elements from the array.

// Example: [1, 5, 4, 3, 2]
//  the sum of all elements is 15 and the cost of removing 5 is 15,
//  now the array is [1, 4, 3, 2] and the sum of all elements is 10 and the cost of removing 4 is 10,
//  now the array is [1, 3, 2] and the sum of all elements is 6 and the cost of removing 3 is 6,
//  now the array is [1, 2] and the sum of all elements is 3 and the cost of removing 2 is 3,
//  now the array is [1] and the sum of all elements is 1 and the cost of removing 1 is 1,
//  Here we can notice that if we remove the largest element first, we will get the minimum cost.
//  So the answer is 15 + 10 + 6 + 3 + 1 = 35

const minimumSumAfterElementsRemoval = arr => {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += [i + 1] * arr[i]; // a+2b+3c+4d+5e+6f+7g+8h+9i+10j
  }
  return sum;
};
console.log(minimumSumAfterElementsRemoval([5, 3, 2, 4, 1])); // 6
console.log(minimumSumAfterElementsRemoval([1, 2, 3, 4, 5])); // 6

// carry forward approach

const minimumSumAfterElementsRemovalOptimized = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  arr.sort((a, b) => b - a);
  let ans = sum;
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    ans += sum;
  }
  return ans;
};
console.log(minimumSumAfterElementsRemovalOptimized([5, 3, 2, 4, 1])); // 6
