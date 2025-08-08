const reverseTheString = str => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let word = "";
    if (str[i] === " ") {
      continue;
    }
    while (str[i] !== " " && i >= 0) {
      word = str[i] + word;
      i--;
    }
    if (word.length > 0) {
      if (reversedString.length > 0) {
        reversedString += " ";
      }
      reversedString = reversedString + word;
    }
  }
  console.log(reversedString);
};

reverseTheString("  Hello    World  "); // Output: "olleH dlroW"
