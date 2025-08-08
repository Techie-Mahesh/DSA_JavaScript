// Write a function that takes an integer and returns the number of 1 bits present in its binary representation.
//  Example:
//  Input: 5 (binary representation: 101)
//  Output: 2 (number of 1 bits)



//  Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
// Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

// Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.

// Input: 5
// Initial score : 0
// Takes help from Sam, score : 1
// Alex solves a question, score : 2
// Alex solves a question, score : 4
// Takes help from Sam, score: 5
// Output: 2

const numberOf1Bits = n => {
  let count = 0;
  while (n > 0) {
    if (n % 2 != 0) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};
console.log(numberOf1Bits(5)); // 2
console.log(numberOf1Bits(7)); // 3
console.log(numberOf1Bits(0)); // 0
console.log(numberOf1Bits(8)); // 1

console.log("---------------------------------------------");

const numberOf1Bits2 = n => {
  let count = 0;
  while (n > 0) {
    count += n & 1; //  n & 1 WILL be 0 for even and 1 for odd
    n = n >> 1; // Right shift the number by 1 bit i.e divide by 2
  }
  return count;
};

console.log(numberOf1Bits2(5)); // 2
