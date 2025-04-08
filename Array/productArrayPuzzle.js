const productArrayPuzzle = arr => {
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    mul *= arr[i];
  }
  let result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = mul / arr[i];
  }
  return result;
};
console.log(productArrayPuzzle([1, 2, 3, 4, 5])); // [ 120, 60, 40, 30, 24 ]
console.log(productArrayPuzzle([5, 1, 10, 1])); // [ 10, 50, 5, 50 ]
