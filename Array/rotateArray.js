Rotate a element for n times in the given Array

I/P: 
let arr =[1,2,3,4,5]
let rotation = 2

O/P:
result = [3,4,5,1,2]




const arr = [1,2,3,4,5] // [2,3,4,1]
const n = arr.length
let r = 2%n
const temp = []
for(let i = 0 ; i<r ; i++){
    temp[i] = arr[i]
}
for (let i = r; i < n; i++) {
  arr[i - r] = arr[i];
}
for (let i = n - r; i < n; i++) {
    arr[3] = temp[0]
  arr[i] = temp[i - (n - r)];
}

console.log("arr==>",arr)

------------------------------------------------------------------------------------------------------
let k =0
let n = arr.length -1
let d =6
let temp=[]
let d1= d%n
for (let i=d1;i<=n;i++){
    temp[k]=arr[i]
    k++
}
for(let i=0; i<d1;i++){
    temp[k]=arr[i]
    k++
}
console.log(temp)