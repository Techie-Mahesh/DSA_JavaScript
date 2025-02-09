const countDigits = x => {
  let count = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
};
console.log(countDigits(4567));
