const binaryAddition = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum,
    carry = 0;
  let ans = "";
  while (i >= 0 || j >= 0 || carry === 1) {
    let sum = carry;
    if (i >= 0) {
      sum += Number(num1[i]);
    }
    if (j >= 0) {
      sum += Number(num2[j]);
    }
    carry = Math.floor(sum / 2);
    ans += String(sum % 2);
    i--;
    j--;
  }
  return ans.split("").reverse().join("");
};
console.log(binaryAddition("101", "110")); // 1011
console.log(binaryAddition("111", "1")); // 1000
