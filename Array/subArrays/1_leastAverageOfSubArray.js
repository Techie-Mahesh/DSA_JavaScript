// problem: Given an array A of size N, find the subarray of size K with the least average.


const leastSubArrayAverage = (arr, k) => {
  let prefixSum = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i] = arr[i] + (prefixSum[i - 1] || 0);
  }
  let minAvg = Number.MAX_VALUE;
  let index = -1;
  for (let i = 0; i < arr.length - k; i++) {
    let sum = 0;
    if (i === 0) {
      sum = prefixSum[k - 1];
    } else {
      sum = prefixSum[i + k - 1] - prefixSum[i - 1];
    }
    if (minAvg > sum) {
      minAvg = sum;
      index = i;
    }
  }
  return index;
};

console.log(leastSubArrayAverage([3, 7, 90, 20, 10, 50, 40], 3)); // 3
console.log(leastSubArrayAverage([3, 7, 5, 20, -10, 0, 12], 2)); // 4

console.log("---------------------------------------------------");

const leastSubArrayAverage2 = (arr, k) => {
  let leastAvg = 0;
  let index = -1;
  for (let i = 0; i < k; i++) {
    leastAvg += arr[i];
  }
  let ans = leastAvg;
  for (let i = k; i < arr.length; i++) {
    leastAvg = leastAvg + arr[i] - arr[i - k];
    if (ans > leastAvg) {
      ans = leastAvg;
      index = i - k + 1;
    }
  }
  return index;
};

console.log(leastSubArrayAverage2([3, 7, 90, 20, 10, 50, 40],    3)); // 3
console.log(leastSubArrayAverage2([3, 7, 5, 20, -10, 0, 12], 2)); // 4
