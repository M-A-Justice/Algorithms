var minOperations = function(boxes) {
  // boxes = '110'
  // return value = [] of length 3 which is equal to the length of the input string
  // return value = [1, 1, 3]

  let ballIndexes = [];
  
  boxes.split('').forEach((ball, index) => {
      if (ball === '1') {
          ballIndexes.push(index)
      }
  });

  // result array
  let result = [];

  // grab all indices(i) that have 1
  // for each index in boxes
  for (let i = 0; i < boxes.length; i += 1) {
      // create a sum
      let sum = 0;
      // for each index(j) that has 1
      for (let j = 0; j < ballIndexes.length; j += 1) {
          // sum = sum + Math.abs(i - j) + 1
          sum = sum + Math.abs(i - ballIndexes[j]);
      }
      result.push(sum);
  }
  return result;
};