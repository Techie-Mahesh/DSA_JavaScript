let arr = [1, 2, 3, 4, 5, 6, 7];
const rotateArray = (arr, k) => {
  k = k % arr.length; // In case k is greater than array length
  let pointer = 0;
  let newArray = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    newArray[pointer] = arr[i];
    pointer++;
  }
  for (let i = 0; i < arr.length - k; i++) {
    newArray[pointer] = arr[i];
    pointer++;
  }
  return newArray;
};

// ----------------------------------------------------------------------

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
};

const rotateArray2 = (arr, k) => {
  reverse(arr, 0, arr.length - 1); // Reverse the entire array
  reverse(arr, 0, k - 1); // Reverse the first k elements
  reverse(arr, k, arr.length - 1); // Reverse the remaining elements
  return arr;
};
// console.log(rotateArray2(arr, 3));

// TC O(n) and SC O(1)

// ---------------------------------------------------------------------

const rotatearray3 = (arr, k) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[(i + k) % arr.length] = arr[i];
  }
  return newArray;
};
console.log(rotatearray3(arr, 3)); // [5, 6, 7, 1, 2, 3, 4]

//  TC O(n) and SC O(n)
