// Noble Integer
// A noble integer is an integer x such that the number of integers less than x is equal to x.
// For example, 3 is a noble integer because there are 3 integers less than 3 in the array [1, -5, 3, 5, -10, 4].
// i.e -5,-10,1 are less than 3 and 3 is equal to 3.
const nobelIntergerCount = arr => {
  let sortedArray = arr.sort();
  let count = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === i) {
      count++;
    }
  }
  return count;
};
console.log(nobelIntergerCount([1, -5, 3, 5, -10, 4])); // 5
console.log(nobelIntergerCount([1, 2, 0, 4, 5])); // 0

