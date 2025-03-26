const multiplicationTable = (num, size = 10) => {
  for (let i = 1; i <= size; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};
multiplicationTable(2,20)