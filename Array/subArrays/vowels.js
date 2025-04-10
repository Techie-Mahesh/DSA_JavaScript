// Given a string, find the number of substrings that start with a vowel.
// For example, for the string "ABEC", the substrings that start with a vowel are "A", "AB", "ABE", "ABEC", "E", and "EC"".

const startWithVowel = str => {
  const arr = str.split("");
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count += arr.length - i;
      console.log(count, i);
    }
  }
  return count;
};

console.log(startWithVowel("ABEC")); // 6

console.log("--------------------------------------------------");

const startWithVowel2 = str => {
  const string = str.toLowerCase();
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(string[i])) {
      count += str.length - i;
    }
  }
  return count
};

console.log(startWithVowel2("ABEC")); // 6
console.log(startWithVowel2("aeiou")); // 15
