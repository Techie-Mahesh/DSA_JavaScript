// Find common elements in two arrays

// I/P:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

// O/P:
// [4,5]

// const findCommonElements = (arr1,arr2)=>{
//     let obj = {}
//     let res = []
//     for (let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = true
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if(obj[arr2[i]]){
//             res.push(arr2[i])
//         }
//     }
//     return res
// }

// ------------------------------------------------------------------------------

const findCommonElements = (arr1, arr2) => {
  let res = [];
  let set = new Set(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  return res;
};

console.log(findCommonElements(arr1, arr2));
