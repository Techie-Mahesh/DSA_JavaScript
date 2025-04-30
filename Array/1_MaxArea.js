// problem statement: https://leetcode.com/problems/container-with-most-water/
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the line i is (i, 0) and (i, height[i]).
// Find two lines, which together with the x-axis form a container, such that the container contains the most water.

const maxArea = arr => {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    maxArea = Math.max(maxArea, height * width);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
