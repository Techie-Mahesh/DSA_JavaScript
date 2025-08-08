// Problem: You have an array A with N elements. We have two types of operation available on this array :
// We can split an element B into two elements, C and D, such that B = C + D.
// We can merge two elements, P and Q, to one element, R, such that R = P ^ Q i.e., XOR of P and Q.
// You have to determine whether it is possible to convert array A to size 1, containing a single element equal to 0 after several splits and/or merge?

//  Approach: [1,6,8,5]
//  we can split even nos into 2 equal halfs example 6 ---> 3,3 and 8 -> 4,4 after merging i.e 3^3 = 0 and 4^4 = 0
//  so we can split even numbers into 2 equal halfs and merge them to get 0.

// we can split odd numbers into 1 & n-1 i.e for 5 it will be 1,4
// n-1 will be always even nos, we can split even nos into 2 equal halfs example 4 ---> 2,2 after merging i.e 2^2 = 0
// so we can split odd numbers into 1 & n-1 and merge them to get 1

// If we have even oddnumbers 1^1 is 0 and 0^0 is 0

const IntersettingArray = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      count++;
    }
  }
  if (count % 2 === 0) {
    return "Yes";
  }
  return "No";
};

console.log(IntersettingArray([1, 2, 3])); // Yes
