let collatzConjecture = (int) => {
  let result = [];

  if (int === 1) {
    result.push(int);
    return result;
  }

  if (int % 2 === 0) {
    result.push(int);
    int = int /= 2;
  } else {
    result.push(int);
    int = (3 * int) + 1;
  }

  return result.concat(collatz(int));
}