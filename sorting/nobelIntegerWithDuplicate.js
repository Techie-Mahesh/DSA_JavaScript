// Noble Integer
// A noble integer is an integer x such that the number of integers Lesser than x is equal to x.
// For example, 3 is a noble integer because there are 3 integers Lesser than 3 in the array [1, -5, 3, 5, -10, 4].
//  original Array: [-10, 0, 2, 5, 2, 4, 4, 5]
//  sorted Array:   [-10, 0, 2, 2, 4, 4, 5, 5]
//  prefix Array:   [  0, 1, 2, 2, 4, 4, 6, 6]
//  index:          [  0, 1, 2, 3, 4, 5, 6, 7]

// Time complexity: O(nlogn) + O(n) = O(nlogn)
// Space complexity: O(n)

const nobelIntegerWithDuplicate = arr => {
  arr = arr.sort();
  let prefixArray = new Array(arr.length);
  let count = 0;
  prefixArray[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      prefixArray[i] = prefixArray[i - 1];
    } else {
      prefixArray[i] = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === prefixArray[i]) {
      count++;
    }
  }
  return count;
};
console.log(nobelIntegerWithDuplicate([1, -5, 3, 5, -10, 4])); // 5
console.log(nobelIntegerWithDuplicate([1, 2, 0, 4, 5])); // 0
console.log(nobelIntegerWithDuplicate([-10, 0, 2, 5, 2, 4, 4, 5])); // 4

console.log("--------------------------------------------------------");

// optimized version of the above code
// carry forward approach
//  Time complexity: O(nlogn) + O(n) = O(nlogn)
//  Space complexity: O(1)

const nobelIntegerWithDuplicateOptimized = arr => {
  arr = arr.sort();
  let count = 0;
  let uniqueElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] !== arr[i - 1]) {
      uniqueElement = i;
    }
    if (arr[i] === uniqueElement) {
      count++;
    }
  }
  return count;
};
console.log(nobelIntegerWithDuplicateOptimized([-10, 0, 2, 5, 2, 4, 4, 5]));
console.log(nobelIntegerWithDuplicateOptimized([-10, 4, 5, 7]));
