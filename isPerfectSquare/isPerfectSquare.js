/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false
 

Constraints:

1 <= num <= 2^31 - 1
*/

const isPerfectSquare = function(num) {
  let low = 0;
  let high = num;
  let mid = Math.ceil((high - low) / 2);
  let square = false;
  
  const search = (low, mid, high) => {
    if (mid === high && mid * mid !== num) {
      return;
    }
    if (mid * mid === num) {
      square = true;
      return;
    }
    if (mid * mid > num) {
      high = mid;
      mid = Math.ceil((high + low) / 2);
      search(low, mid, high);
    }
    if (mid * mid < num) {
      low = mid;
      mid = Math.ceil((high + low) / 2);
      search(low, mid, high);
    }
  }
  
  search(low, mid, high);
  return square;
};