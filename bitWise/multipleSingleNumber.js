/**
 * Finds two unique numbers in an array where every other number appears twice.
 *
 * @param {number[]} arr - The input array containing integers, where exactly two numbers appear only once, and all others appear twice.
 * @returns {number[]} An array containing the two unique numbers.
 *
 * @example
 * // Example usage:
 * const result = twoUniqueNumbers([4, 1, 2, 1, 2, 5]);
 * console.log(result); // Output: [4, 5] (order may vary)
 */
const twoUniqueNumbers = arr => {
  let ans = 0;
  let resultArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    ans ^= arr[i];
  }
  let bit = 0;
  for (let i = 0; i < 32; i++) {
    if ((ans & (1 << i)) > 0) {
      bit = i;
      break;
    }
  }
  let ele1 = 0,
    ele2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & (1 << bit)) > 0) {
      ele1 ^= arr[i];
    } else {
      ele2 ^= arr[i];
    }
  }
  resultArray.push(ele1, ele2);
  return resultArray;
};
console.log(twoUniqueNumbers([1, 2, 3, 4, 5, 1, 2, 3])); // [4,5]
