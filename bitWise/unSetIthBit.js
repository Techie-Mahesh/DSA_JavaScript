// Description: Unset the ith bit of a number n
// Approach: To unset the ith bit of a number n, we can use the bitwise AND operator (&) with the negation of the ith bit.
// Example : If n = 5 (binary 101) and i = 1, we want to unset the 1st bit (counting from 0).
// The binary representation of 5 is 101. To unset the 1st bit, we can use the following formula:
//  5  ---->        101
//  1 << 1 --->     010 (this is the ith bit we want to unset)
// ~(1 << 1) --->   101 (this is the negation of the ith bit we want to unset)
//  5 & ~(1 << 1) ---> 101 & 101 = 101 (this is the result after unsetting the ith bit)

const unSetIthBit = (n, i) => {
  return n & ~(1 << i);
};
