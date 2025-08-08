// Unsetting X bits from right
// Given an integer A. Unset B bits from the right of A in binary.

// For example, if A = 93 and B = 4, the binary representation of A is 1011101.
// If we unset the rightmost 4 bits, we get the binary number 1010000, which is equal to the decimal value 80.

const unSetXbitsFromRight = (num, k) => {
  let ans = num;
  for (let i = 0; i < k; i++) {
    if (num & (1 << i)) {
      ans -= 1 << i;
    }
  }
  return ans;
};
console.log(unSetXbitsFromRight(25, 3));
console.log(unSetXbitsFromRight(37, 3));
console.log(unSetXbitsFromRight(93, 4));
