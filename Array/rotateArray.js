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

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
};
const rotateArray2 = (arr, k) => {
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
};
console.log(rotateArray2(arr, 3));
