/******************************Relative Sort Array******************************
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * 
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 *  
 * 
 * Constraints:
 * 
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * All the elements of arr2 are distinct.
 * Each arr2[i] is in arr1.
*/

var relativeSortArray = function(arr1, arr2) {
  // create a result array
  let result = [];
  // create an addition array for elements that don't match
  let toConcat = [];
  // for each number in arr2
  arr2.forEach(integer => {
    // iterate through arr1
    for (let i = 0; i < arr1.length; i += 1) {
      // if current number in arr1 is equal to current number in arr2
      if (arr1[i] === integer) {
        result.push(arr1.splice(i, 1)[0]);
        i -= 1;
      }
    }
  });
  arr1.sort((a, b) => a - b);
  // return result array
  return result.concat(arr1);
};

console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));