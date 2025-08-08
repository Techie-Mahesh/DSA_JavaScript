const toLowerCase = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 32);
    }
  }
  return arr
};

console.log(
  toLowerCase(["S", "c", "a", "L", "e", "r", "#", "2", "0", "2", "0"])
);
