function findLongestWordLength(str) {
  let wordArray = str.split(" ");
  let longWord = wordArray[0];
  for (let i = 1; i < wordArray.length; i++) {
    if (wordArray[i].length > longWord.length) {
      longWord = wordArray[i];
      console.log(`The long word is ${longWord}`);
    }
  }
  str = longWord;
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
