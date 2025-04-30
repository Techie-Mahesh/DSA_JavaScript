// You are given a large number in the form of a string A where each character denotes a digit of the number.
// You are also given a number B. You have to find out the value of A % B and return it.
//  Example Input: A = "12345678901234567890", B = 1000000007
//  Output: 123456789

// Since the number is very large, we cannot use the normal modulus operator. Instead, we can use the property of modulus that states
// (a * b) % c = [(a % c) * (b % c)] % c. We can iterate through each digit of the number and calculate the modulus using this property.
// (a + b) % c = [(a % c) + (b % c)] % c

const modBigString = (num, mod) => {
  let result = 0;
  let pow = 1;
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i]);
    digit = (digit * pow) % mod;
    result = (result + digit) % mod;
    pow = (pow * 10) % mod;
  }
  return result;
};

console.log(modBigString("43535321",47)); // 123456789
