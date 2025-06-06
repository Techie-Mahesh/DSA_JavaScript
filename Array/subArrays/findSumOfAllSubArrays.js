// Brute force approach to find the sum of all subarrays of an array
// Time complexity: O(n^3)
// Space complexity: O(1)

const arr = [1, 2, 3];

const findSumOfAllSubArrays = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = [];
      let sum = 0;
      for (let k = i; k <= j; k++) {
        subArray.push(arr[k]);
        sum += arr[k];
      }
      console.log(`Subarray: ${subArray}, Sum: ${sum}`);
    }
  }
};

findSumOfAllSubArrays(arr); // Subarrays and their sums
console.log(
  "--------------------------------------------------------------------------"
);

// -------------------------------------------------------------------------

// Prefix sum approach to find the sum of all subarrays of an array
// Time complexity: O(n^2)
// Space complexity: O(n)

const prefixSum = arr => {
  let prefixArray = new Array(arr.length).fill(0);
  prefixArray[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixArray[i] = prefixArray[i - 1] + arr[i];
  }
  return prefixArray;
};

const findSumOfAllSubArrays2 = arr => {
  const prefixArray = prefixSum(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i === 0) {
        console.log(`Subarray: ${arr.slice(i, j + 1)}, Sum: ${prefixArray[j]}`);
      } else {
        console.log(
          `Subarray: ${arr.slice(i, j + 1)}, Sum: ${
            prefixArray[j] - prefixArray[i - 1]
          }`
        );
      }
    }
  }
};
findSumOfAllSubArrays2(arr); // Subarrays and their sums

console.log(
  "--------------------------------------------------------------------------"
);

// --------------------------------------------------------------------------

// Carry forward approach to find the sum of all subarrays of an array
// Time complexity: O(n^2)
// Space complexity: O(1)

const findSumOfAllSubArrays3 = arr => {
  let toatalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (j = i; j < arr.length; j++) {
      sum += arr[j];
      toatalSum += sum;
      console.log(`Subarray: ${arr.slice(i, j + 1)}, Sum: ${sum}`);
    }
  }
  console.log(`Total Sum of all subarrays: ${toatalSum}`);
};
findSumOfAllSubArrays3(arr); // Subarrays and their sums

const findTotalSumOfAllSubArrays = arr => {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i] * (i + 1) * (arr.length - i);
    //  the formula (i + 1) * (arr.length - i) tells us how many times each element appears in all subarrays
  }
  return totalSum;
};
const totalSum = findTotalSumOfAllSubArrays(arr);
console.log(`Total Sum of all subarrays: ${totalSum}`); // Total sum of all subarrays
console.log(
  "--------------------------------------------------------------------------"
);
