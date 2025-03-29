const findMaxMin = arr => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
};
console.log(findMaxMin([5, 10000, 1, 2, 3, 4, -5])); // { max: 10000, min: -5 }
