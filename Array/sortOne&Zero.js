const array = [1, 0, 0, 1, 0, 1, 0];
let result = [];
let firstPointer = 0;
let lastPointer = array.length - 1;

const sortOneAndZero = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      result[firstPointer++] = 1;
    } else {
      result[lastPointer--] = 0;
    }
  }
  return result;
};
console.log(sortOneAndZero(array));
