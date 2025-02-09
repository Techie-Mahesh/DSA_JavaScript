const isPalindrome = num => {
  if (num < 0) return false;
  return num === parseInt(num.toString().split("").reverse().join(""));
};

console.log(isPalindrome(12321)); // true

const isPalindrome2 = num => {
  if (num < 0) return false;
  let reversed = 0;
  let original = num;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return original === reversed;
};
console.log(isPalindrome2(1)); // true
