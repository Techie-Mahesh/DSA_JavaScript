// Given two integers A and B, find the greatest possible positive integer M, such that A % M = B % M.
// If no such M exists, return -1.

const greatestModulo = (A, B) => {
    return A === B ? -1 : Math.abs(A - B);
}

console.log(greatestModulo(10, 5)); // 5
console.log(greatestModulo(10, 10)); // -1
console.log(greatestModulo(10, 0)); // 10