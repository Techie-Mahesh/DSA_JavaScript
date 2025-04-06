// Given an array, the task is to find the number of leaders in it.
// An element is a leader if it is greater than all the elements to its right side.
// The rightmost element is always a leader.
// For example, in the array {16, 17, 4, 3, 5, 2},
// 17 , 5 and 2 are leaders.

const leaderCount = arr => {
  let max = arr[arr.length - 1];
  let count = 1; // The last element is always a leader
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      count++;
      max = arr[i];
    }
  }
  return count;
};

console.log(leaderCount([16, 17, 4, 3, 5, 2])); // 3
