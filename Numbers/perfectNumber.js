// Perfect Number 
// The perfect number is a positive integer that is equal to the sum of its proper divisors excluding itself.
// Proper divisor of a number is the positive number that divides the number completely, excluding the number itself.
// For example, the number 28 is a perfect number because its proper divisors are 1, 2, 4, 7, 14 and 1 + 2 + 4 + 7 + 14 = 28

const perfectNumber = num => {
  let result = 1;
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result += i;
      if (num / i !== i) {
        result += num / i;
      }
    }
  }
  return result === num;
};

console.log(perfectNumber(6)); // true
console.log(perfectNumber(28)); // true
console.log(perfectNumber(16)); // true

