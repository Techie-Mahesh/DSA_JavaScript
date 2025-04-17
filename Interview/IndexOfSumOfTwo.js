// Problem statement: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// example: nums = [2,7,11,15], target = 9, return [0,1] because nums[0] + nums[1] = 2 + 7 = 9

// const twoSum = (nums, target) => {
//   const set = new Set(nums);
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (set.has(complement)) {
//       return [i, nums.indexOf(complement)];
//     }
//   }
//   return []
// };
const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (map.has(comp)) {
      return [map.get(comp), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
