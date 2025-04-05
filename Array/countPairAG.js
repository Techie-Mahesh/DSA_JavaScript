// Given an array of strings, count the number of pairs of "a" and "g" such that "a" comes before "g".
// For example, for the array ["h","b","g","a","a","g","a","g","h","g"], the output should be 5.

// The brute force approach is to use two nested loops to count the pairs of "a" and "g".
// T.C O(n^2) and S.C O(1)

const countPairs = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === "g") {
          count++;
        }
      }
    }
  }
  return count;
};
console.log(countPairs(["h", "b", "g", "a", "a", "g", "a", "g", "h", "g"])); // 8



