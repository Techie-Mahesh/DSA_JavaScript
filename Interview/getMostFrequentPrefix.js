// Description: Given an array of strings, find the most frequent prefix among the strings.
// Example: ["apple", "app", "appricot", "banana"]
// output: "ap"->3

const getMostFrequentPrefix = arr => {
  let prefixObj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    let strArray = arr[i].split("");
    for (let j = 0; j < strArray.length; j++) {
      str += strArray[j];
      prefixObj[str] = prefixObj[str] ? prefixObj[str] + 1 : 1;
    }
  }
  const maxPrefix = Object.entries(prefixObj).reduce(
    (acc, [key, value]) => {
      if (
        value > acc.value ||
        (value === acc.value && key.length > acc.key.length)
      ) {
        return { key, value };
      }
      return acc;
    },
    { key: "", value: -Infinity }
  );
  return maxPrefix;
};
console.log(getMostFrequentPrefix(["apple", "appr", "appricot", "banana"]));
