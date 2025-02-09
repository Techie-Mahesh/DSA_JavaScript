const fibonacciNumbers = n => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};
console.log(fibonacciNumbers(5)); // [0, 1, 1, 2, 3]

const recurssiveFib = n => {
  if (n <= 1) {
    return n;
  }
  return recurssiveFib(n - 1) + recurssiveFib(n - 2);
};
console.log(recurssiveFib(5)); // 5
