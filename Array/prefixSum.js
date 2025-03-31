// Given N array elements & Q queries, find the sum of elements in the range [L, R] for each query.
// Example: arr = [1, 2, 3, 4, 5], queries = [[1, 3], [2, 4]] => [6, 12] because arr[1] + arr[2] + arr[3] = 6 & arr[2] + arr[3] + arr[4] = 12

// Brute force approach
const prefixSum = (arr, queries) => {
  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    let [l, r] = queries[i];
    for (let j = l; j <= r; j++) {
      sum += arr[j];
    }
    console.log(sum);
  }
};

// prefixSum(
//   [1, 2, 3, 4, 5],
//   [
//     [1, 3],
//     [2, 4]
//   ]
// ); // 6, 12

//  Here T.C = O(q*n) because for each query we are iterating through the array to find the sum of elements in the range [L, R].
//  S.C = O(1) because we are not using any extra space except for the input array and queries.

// -------------------------------------------------------------------------------------------

// We can optimize this using prefix sum array.

const prefixSumOptimized = (arr, queries) => {
  let prefixedArray = new Array(arr.length);
  prefixedArray[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixedArray[i] = prefixedArray[i - 1] + arr[i];
  }
  for (let i = 0; i < queries.length; i++) {
    let [l, r] = queries[i];
    if (l === 0) {
      console.log(prefixedArray[r]);
    } else {
      console.log(prefixedArray[r] - prefixedArray[l - 1]);
    }
  }
};
prefixSumOptimized(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [2, 4]
  ]
); // 6, 12

// T.c = max(O(n), O(q)) because we are iterating through the array to create the prefix sum array and then iterating through the queries to find the sum of elements in the range [L, R].
// S.C = O(n) because we are using an extra array to store the prefix sum.

// ------------------------------------------------------------------------------------------

// We can optimize this further by using the same array to store the prefix sum.
// This will reduce the space complexity to O(1) because we are not using any extra space except for the input array.

const prefixSumOptimizedUsingSameArray = (arr, queries) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += arr[i - 1] || 0; // add the previous element to the current element
  }
  for (let i = 0; i < queries.length; i++) {
    let [l, r] = queries[i];
    if (l === 0) {
      console.log(arr[r]);
    } else {
      console.log(arr[r] - arr[l - 1]);
    }
  }
};
prefixSumOptimizedUsingSameArray(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [2, 4]
  ]
);

// T.C = max(O(n), O(q)) because we are iterating through the array to create the prefix sum array and then iterating through the queries to find the sum of elements in the range [L, R].
// S.C = O(1) because we are using the same array to store the prefix sum.
