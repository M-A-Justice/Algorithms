/*********************** Remove Linked List Elements **********************************
*
* Given the head of a linked list and an integer val, 
* remove all the nodes of the linked list that has Node.val == val,
* and return the new head.
*
*
* Example 1:
*
* Input: head = [1,2,6,3,4,5,6], val = 6
* Output: [1,2,3,4,5]
*
*
* Example 2:
*
* Input: head = [], val = 1
* Output: []
*
*
* Example 3:
*
* Input: head = [7,7,7,7], val = 7
* Output: []
*
*/

// Input: Linked List and a Value
// Output: Linked List with the Value removed
// Edge-Cases: None
// Constraints: None

var removeElements = function(head, val) {
  // previous pointer to hold the previous head to allow for removal
  let prev = null;
  // current head to keep track place equal to input head
  let current = head;
  // create temp node for deletion
  let temp;
  
  // while there is a current node
  while (current) {
      // if previous node is undefined
      if (!prev) {
          // if current value is equal to val
          if (current.val === val) {
              // previous node equals the current node
              prev = current;
              // current node equals the next node
              current = current.next;
              // previous node next equals null
              prev.next = null
              // reset head to current
              head = current;
              // previous equals null
              prev = null;
          } else {
              // previous equals current
              prev = current;
              // current equals next
              current = current.next  
          }
      // if current value is equal to val
      } else if (current.val === val) {
          // temp equals current
          temp = current;
          // current equals the next node
          current = current.next;
          // previous next equals current
          prev.next = current
          // temp equals null
          temp = null;
      } else {
          // previous equals current
          prev = current;
          // current equals next
          current = current.next
      }
  }
  // return head
  return head;
};
 













