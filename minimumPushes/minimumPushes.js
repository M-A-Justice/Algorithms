var minimumPushes = function(word) {
  // keypad may be remapped
  // keypad is nums 2-9
  // Ideally, the first time you see a letter in "word", you map it to the first available key
  // letters that appear more frequently in the word should be "cheaper" on presses
  // "cheap" letters would likely be vowels

  // count letter frequency in word using an object
  // based on letter frequency, assign to keys
  // based on key assignment, calculate sum
  let total = 0;

  const letterCount = {};

  word.split('').forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });

  // sort letters by count
  let frequency = [];

  for (let [key, value] of Object.entries(letterCount)) {
    frequency.push({
        letter: key,
        count: value,
    })
  }

  frequency.sort((a, b) => b.count - a.count);

  // potential mathmatical solution here. involves iteration over frequency
  // based on what index we're at multiply count by 1-5
  // indices 0-7 = 1, 8-15 = 2, etc.

  frequency.forEach((value, index) => {
    total += value.count * Math.floor((index / 8) + 1);
  })

  return total;
};