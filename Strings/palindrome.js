Palindrome;

const palindrome1 = str => {
  let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let result = "";
  for (let i = formattedString.length - 1; i >= 0; i--) {
    result += formattedString[i];
  }
  return result === formattedString;
};

/* ----------------------------------------------------------------------------- */

const palindrome = str => {
  const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0;
  let end = formattedString.length - 1;
  while (start < end) {
    if (formattedString[start] !== formattedString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(palindrome("Madam")); // true
