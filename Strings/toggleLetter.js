const toggleLetter = str => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result += String.fromCharCode(str[i].charCodeAt(0) + 32);
    } else if (str[i] >= "a" && str[i] <= "z") {
      result += String.fromCharCode(str[i].charCodeAt(0) - 32);
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(toggleLetter("ScaLeR#2020")); // Output: "sCAlEr#2020"

console.log("--------------------------------------------------------");

const toggleLetterOptimised = str => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      result += String.fromCharCode(charCode ^ 32);
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(toggleLetterOptimised("ScaLeR#2020")); // Output: "sCAlEr#2020"
console.log(toggleLetterOptimised("ScaLeR#2020")); // Output: "sCAlEr#202
