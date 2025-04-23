const repeatedNumber = arr => {
  let actualSum = 0;
  let actualSquareSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
    actualSquareSum += arr[i] * arr[i];
  }
  let expectedSum = (arr.length * (arr.length + 1)) / 2; // n(n+1)/2
  let expectedSquareSum =
    (arr.length * (arr.length + 1) * (2 * arr.length + 1)) / 6; // n(n+1)(2n+1)/6
  let diff = expectedSum - actualSum; // x-y
  let diffSquareSum = expectedSquareSum - actualSquareSum; // x^2 - y^2 = (x-y)(x+y)
  let sum = diffSquareSum / diff; // x+y = (x^2 - y^2)/(x-y)
  let x = (diff + sum) / 2; // x = (x+y)/2 + (x-y)/2
  let y = x - diff;
  return [x, y];
};

console.log(repeatedNumber([1, 2, 3, 4, 5, 6, 7, 9, 10, 10])); // [10, 11]
console.log(repeatedNumber([1, 2, 3, 4, 8])); // [10, 11]

console.log("--------------------------------------------------");

// usiing bit manipulation

const repeatNumber2 = arr => {
  let xor = 0;

  // Step 1: XOR all array elements and numbers from 1 to n
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
    xor ^= i + 1; // this was incorrect in your original code: xor ^= [i+1] (brackets are wrong)
  }

  // Step 2: Find the rightmost set bit
  let bit = 0;
  for (let i = 0; i < 32; i++) {
    if ((xor & (1 << i)) > 0) {
      bit = i;
      break;
    }
  }

  // Step 3: Divide into two buckets using the set bit
  let ele1 = 0,
    ele2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & (1 << bit)) > 0) {
      ele1 ^= arr[i];
    } else {
      ele2 ^= arr[i];
    }

    const num = i + 1;
    if ((num & (1 << bit)) > 0) {
      ele1 ^= num;
    } else {
      ele2 ^= num;
    }
  }

  // Step 4: Decide which is repeated and which is missing
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele1) {
      return [ele1, ele2]; // ele1 is repeated, ele2 is missing
    }
    if (arr[i] === ele2) {
      return [ele2, ele1]; // ele2 is repeated, ele1 is missing
    }
  }

  return [];
};

// ✅ Example test
console.log(repeatNumber2([1, 2, 3, 5, 2])); // Output: [2, 4]

// If the numbers are in sorted order

const repeatedNumber3 = arr => {
  let duplicateNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      duplicateNumber = arr[i];
      break;
    }
  }
  let expectedSum = (arr.length * (arr.length + 1)) / 2; // n(n+1)/2
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return [duplicateNumber, expectedSum - actualSum + duplicateNumber];
};

console.log(repeatedNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); // Output: 10
