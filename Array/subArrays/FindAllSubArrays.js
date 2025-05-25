const findSubArrays = arr => {
  const subArrays = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = [];
      for (let k = i; k <= j; k++) {
        subArray.push(arr[k]);
      }
      subArrays.push(subArray);
    }
  }
  return subArrays;
};

console.log(findSubArrays([1, 2, 3])); // [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
