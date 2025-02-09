// Remove Duplicate elements in an array;

// I/P:
let arr1 = [1,1,2,3,4,4,5,6,8]
let arr2 = [1,1,2,4,5,6,6,9]

// O/P:
// [1, 2, 3, 4,5, 6, 8, 9]

const removeDuplicates = (arr)=>{
    if(arr.length === 0 || arr.length === 1) return res = arr;
    for (let i=0; i<arr.length;i++){
    if(!obj[arr[i]]){
        res[index++]=arr[i]
        obj[arr[i]] = true
    }
}
}
let res =[]
let index = 0;
let obj={}

removeDuplicates(arr1)
removeDuplicates(arr2)