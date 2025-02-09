let arr = [10, 20, 30, 50,60];
const reverseArray = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr
};
console.log(reverseArray(arr));
