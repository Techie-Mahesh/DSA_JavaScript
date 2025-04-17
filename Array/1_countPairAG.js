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

// ---------------------------------------------------------------------------

// Optimized approach ( T.C O(n) and S.C O(n) )
// The optimized approach is to use a single loop to count the number of "a"s and "g"s.
//  create a prefix sum array to store the count of "g"s up to each index.
//   Example: for the array ["h","b","g","a","a","g","a","g","h","g"],
//prefix sum array would be [ 0,  0,  1,  1,  1,  2,  2,  3,  3,  4].

const prefixedArrayCountG = arr => {
  let prefixArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "g") {
      prefixArray[i] = (prefixArray[i - 1] || 0) + 1;
    } else {
      prefixArray[i] = prefixArray[i - 1] || 0;
    }
  }
  return prefixArray;
};
const countPairsOptimized = arr => {
  let prefixedArray = prefixedArrayCountG(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      count += prefixedArray[arr.length - 1] - prefixedArray[i];
    }
  }
  return count;
};

console.log(
  countPairsOptimized(["h", "b", "g", "a", "a", "g", "a", "g", "h", "g"])
); // 8

// ---------------------------------------------------------------------------
// Optimized approach ( T.C O(n) and S.C O(1) )
// The optimized approach is to use a single loop to count the number of "a"s and "g"s.

const countPairsOptimized2 = arr => {
  let count_G = 0;
  let count_Ag = 0;
 for(let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "g") {
      count_G++;
    } else if (arr[i] === "a") {
      count_Ag += count_G;
    }
  }
  return count_Ag;
};

console.log(
  countPairsOptimized2(["h", "b", "g", "a", "a", "g", "a", "g", "h", "g"])
); // 8


const countPairsOptimized3 = arr => {
  let countG = 0;
  let countAg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "g") {
      countG = countG + 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "g") {
      countG = countG - 1;
    }
    if (arr[i] === "a") {
      countAg += countG;
    }
  }
  return countAg;
};
console.log(
  countPairsOptimized3(["h", "b", "g", "a", "a", "g", "a", "g", "h", "g"])
); // 8
