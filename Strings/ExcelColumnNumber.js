const excelColumnNumber = str => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result * 26 + (str[i].charCodeAt(0) - "A".charCodeAt(0) + 1);
  }
  return result;
};
console.log(excelColumnNumber("A")); // 1
console.log(excelColumnNumber("Z")); // 26
console.log(excelColumnNumber("AA")); // 27
console.log(excelColumnNumber("AB")); // 28
console.log(excelColumnNumber("AZ")); // 52
console.log(excelColumnNumber("BA")); // 53
console.log(excelColumnNumber("ZZ")); // 702
console.log(excelColumnNumber("AAA")); // 703
