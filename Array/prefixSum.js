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

