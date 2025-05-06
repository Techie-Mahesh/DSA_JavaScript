// problem: A wire connects N light bulbs.

// Each bulb has a switch associated with it; however, due to faulty wiring, a switch also changes the state of all the bulbs to the right of the current bulb.
// Given an initial state of all bulbs, find the minimum number of switches you have to press to turn on all the bulbs.
// You can press the same switch multiple times.
// Note: 0 represents the bulb is off and 1 represents the bulb is on.

// Example: Input [0,1,0,1]
// Output: 4
// Explanation:
// 1. Press switch 0, the state becomes [1,0,1,0]
// 2. Press switch 1, the state becomes [1,1,0,1]
// 3. Press switch 2, the state becomes [1,1,1,0]
// 4. Press switch 3, the state becomes [1,1,1,1]

const bulbSwitch = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
      for (let j = i; j < arr.length; j++) {
        arr[j] = arr[j] === 0 ? 1 : 0;
      }
    }
  }
  console.log(arr);
  return count;
};

console.log(bulbSwitch([0, 1, 1, 0, 0, 1])); // 3

console.log("------------------------------------------------------------");

const optimisedBulbSwitch = arr => {
  let count = 0;
  let flipState = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === flipState) {
      count++;
      flipState = 1 - flipState; // flip the state
    }
  }
  return count;
};
console.log(optimisedBulbSwitch([0, 1, 1, 0, 0, 1])); // 4
console.log(optimisedBulbSwitch([0, 1, 0, 1])); // 4
console.log(optimisedBulbSwitch([1, 0, 0, 0])); // 1
console.log(optimisedBulbSwitch([0, 0, 0, 0])); // 1
console.log(optimisedBulbSwitch([1, 1, 1, 1])); // 0
