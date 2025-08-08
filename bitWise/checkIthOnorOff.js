// Given a number N check if the ith bit is on or off.
// If the ith bit is on return 1 else return 0.

// Brute force approach by converting the number to binary and checking the ith bit
const checkIthOnorOff = (n, i) => {
  let ans = "";
  while (n !== 0) {
    ans = (n % 2) + ans;
    n = Math.floor(n / 2);
  }
  return ans[ans.length - 1 - i] === "1" ? 1 : 0;
};
console.log(checkIthOnorOff(4, 0)); // 0
console.log(checkIthOnorOff(4, 2)); // 1

console.log("--------------------------------------------------");

// Optimized approach by using bitwise operator

const checkIthOnorOffUsingLeftShift = (n, i) => {
  return (n & (1 << i)) !== 0 ? 1 : 0;
};
console.log(checkIthOnorOffUsingLeftShift(57, 2)); // 0
console.log(checkIthOnorOffUsingLeftShift(57, 5)); // 1

// Example 57 & 32 (2^5) => 57 & 32 = 32 => 32 != 0 => 1

console.log("--------------------------------------------------");

// Optimized approach by using bitwise operator
const checkIthOnorOffUsingRightShift = (n, i) => {
  return (n >> i) & 1; // Right shift the number by i bits and check if the last bit is 1 or 0
};

console.log(checkIthOnorOffUsingRightShift(57, 2)); // 0
console.log(checkIthOnorOffUsingRightShift(57, 5)); // 1
