const reverseBit = n => {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      ans |= 1 << (31 - i); // set the bit at position 31-i
    }
  }
  return ans >>> 0; // convert to unsigned integer
};
console.log(reverseBit(3)); // 3221225472
