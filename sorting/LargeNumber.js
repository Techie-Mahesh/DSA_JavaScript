// Problem: Given an array of numbers, arrange them in such a way that they form the largest number possible. For example, given [50, 2, 1, 9], the largest number formed is 95021.
// return in the form of string
// Example: [0, 50, 35, 341, 5345, 9] => "95345341350"

const getLargeNumber = arr => {
  arr.sort((a, b) => {
    if (a + "" + b < b + "" + a) {
      return 1;
    } else {
      return -1;
    }
  });
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
};
console.log(getLargeNumber([0, 50, 35, 341, 5345, 9]));
console.log(getLargeNumber([0, 50, 35, 341, 98, 9,997]));
