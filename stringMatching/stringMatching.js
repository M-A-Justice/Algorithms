var stringMatching = (words) => {
  // create result array
  let result = [];
  // shorter words are likely substrings, sort short to front
  words.sort((a, b) => a.length - b.length);
  // iterate over words list
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    // for each word in word list iterate over word list
    for (let j = 0; j < words.length; j += 1) {
      // if word includes current word but isn't current word
      if (words[j].includes(word) && words[j] !== word) {
        // push to result
        result.push(word);
        break;
      }
    }
  }

  // return result array
  return result;
};