// Akash likes playing with strings. One day he thought of applying following operations on the string in the given order:

// Concatenate the string with itself.
// Delete all the uppercase letters.
// Replace each vowel with '#'.
// You are given a string A of size N consisting of lowercase and uppercase alphabets. Return the resultant string after applying the above operations.

// NOTE: 'a' , 'e' , 'i' , 'o' , 'u' are defined as vowels.

const stringOpertaions = str => {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let result = "";
  let doubled = str + str; 
  for (let i = 0; i < doubled.length; i++) {
    let char = doubled[i];
    if (vowels.has(char)) {
      result += "#";
    } else if (char >= "a" && char <= "z") {
      result += char;
    }
  }
  return result;
};
console.log(stringOpertaions("aeiOUz")); // ###z###z
