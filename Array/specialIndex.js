const specialIndex = arr => {
  let PE = new Array(arr.length);
  let PO = new Array(arr.length);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      PE[i] = arr[i];
      PO[0] = 0;
    } else {
      PE[i] = PE[i - 1] + (i % 2 === 0 ? arr[i] : 0);
      PO[i] = PO[i - 1] + (i % 2 === 1 ? arr[i] : 0);
    }
  }
  console.log(PE, PO);
  let SE = PE[0];
  let SO = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      SE = PO[arr.length - 1] - PO[i];
      SO = PE[arr.length - 1] - PE[i];
      if (SE == SO) {
        count++;
      }
    } else {
      SE = PE[i - 1] + PO[arr.length - 1] - PO[i];
      SO = PO[i - 1] + PE[arr.length - 1] - PE[i];
      if (SE === SO) {
        count++;
      }
    }
  }
  return count;
};

// console.log(specialIndex([1, 2, 3])); // 0
// console.log(specialIndex([2, 1, 6, 4]));
console.log(specialIndex([1, 1, 1]));
