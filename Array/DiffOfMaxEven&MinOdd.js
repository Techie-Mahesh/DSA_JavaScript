// Given an array of integers, find the difference between the maximum even number and the minimum odd number in the array. If there are no even numbers or no odd numbers, return 0.
// Example: [1, 2, 3, 4, 5] => maxEven = 4, minOdd = 1 => 4 - 1 = 3
// Example:  [0, 2, 9] => maxEven = 2, minOdd = 9 => 2 - 9 = -7

const diffofMaxEvenMinOdd = arr => {
  if (arr.length < 1) return 0;
  let maxEven = -Infinity;
  let minOdd = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > maxEven) {
      maxEven = arr[i];
    }
    if (arr[i] % 2 !== 0 && arr[i] < minOdd) {
      minOdd = arr[i];
    }
  }
  if (maxEven === -Infinity || minOdd === Infinity) {
    return 0;
  }
  return maxEven - minOdd;
};

console.log(diffofMaxEvenMinOdd([1, 2, 3, 4, 5])); // 3
console.log(diffofMaxEvenMinOdd([0, 2, 9])); // -7
console.log(diffofMaxEvenMinOdd([2, 4, 6])); // 0