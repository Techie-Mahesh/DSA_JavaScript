//  Given array of interger of size n, every element is repeated twice except one element. Find that unique element in the array.

const findUniqueElement = arr => {
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return arr[i];
    }
  }
  return null;
};

console.log(findUniqueElement([1, 2, 3, 4, 5, 2, 3, 1, 4])); // 5

console.log("---------------------------------------------------");

// // Optimized approach: O(n) and space complexity: O(1)
// Using xor operator

const findSingleOccurenceElement = arr => {
  let uniqueElement = 0;
  for (let i = 0; i < arr.length; i++) {
    uniqueElement ^= arr[i];
  }
  return uniqueElement;
};
console.log(findSingleOccurenceElement([1, 2, 3, 4, 5, 2, 3, 1, 4, 8])); // 5
