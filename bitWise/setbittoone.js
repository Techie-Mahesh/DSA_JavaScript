// Given 0 set ith & jth bit to 1

const setIth_JthBitToOne = (n, i, j) => {
  return n | (1 << i) | (1 << j);
};
console.log(setIth_JthBitToOne(0, 0, 1)); // 36
console.log(setIth_JthBitToOne(4, 0, 1)); // 36

