//  Given an array of integers, the task is to count the number of elements in the array that are not equal to the maximum element in the array.
//  For example, for the array [7, 6, 1, 5, 3, 4, 6], the maximum element is 7 and the count of elements not equal to 7 is 6.

const maxNumber = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const countElements = arr => {
  let max = maxNumber(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count++;
    }
  }
  return arr.length - count;
};

console.log(countElements([7, 6, 1, 5, 3, 4, 6])); // 6

const countElements2 = arr => {
  let max = arr[0];
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxCount = 1;
    } else if (arr[i] === max) {
      maxCount++;
    }
  }
  return arr.length - maxCount;
};

console.log(countElements2([7, 6, 1, 5, 3, 4, 6])); // 6
console.log(countElements2([1, 2, 3, 4, 5])); // 4
