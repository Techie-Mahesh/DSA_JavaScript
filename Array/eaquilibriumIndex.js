// Equilibrium Index is a point in an array where the sum of elements on the left is equal to the sum of elements on the right.
// For Example arr = [-3,2,4,-1] => 2 is the equilibrium index because sl= -3 + 2 = -1, sr = -1

// brute force approach

const equilibriumIndex = arr => {
  for (let i = 0; i < arr.length; i++) {
    let sl = 0;
    let sr = 0;
    for (let j = i - 1; j >= 0; j--) {
      sl += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      sr += arr[k];
    }
    if (sl === sr) {
      return i;
    }
  }
  return -1;
};

console.log(equilibriumIndex([-3, 2, 4, -1])); // 2

// TC O(n^2) and SC O(1)

// -----------------------------------------------------------------------------------

