// ["is", "are", "DAR"]
// "My name is darvin, and people call me darvin, is this a correct statement ?";

// This was the text given and the question is to iterate through them and count the first array words with the substring in the second string.
// And when the count of the word is
// Odd - Print the count
// Even - Bad practise - count - word

const arr = ["is", "are", "DAR"];
const text =
  "My name is darvin, and people call me darvin, is this a correct statement ?";

const subStringCounter = (words, text) => {
  const lowerText = text.toLowerCase();

  words.forEach((word) => {
    const lowerWord = word.toLowerCase();
    let count = 0;

    for (let i = 0; i <= lowerText.length - lowerWord.length; i++) {
      if (
        lowerText.slice(i).includes(lowerWord) &&
        lowerText.slice(i, i + lowerWord.length) === lowerWord
      ) {
        count++;
      }
    }

    if (count % 2 === 1) {
      console.log("word ==>", word, count);
    } else if (count > 0) {
      console.log(`Bad practise - ${count} - ${word}`);
    }
  });
};
subStringCounter(arr, text);
