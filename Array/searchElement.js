const searchElement =(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return 0;
}

console.log(searchElement([1,2,3,4,5],3)); // 2
console.log(searchElement([1,2,3,4,5],6)); // 0