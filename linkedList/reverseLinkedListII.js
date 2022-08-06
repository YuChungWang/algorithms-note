// https://leetcode.com/problems/reverse-linked-list-ii/

// Given the head of a singly linked list and two integers left and right where left <= right,
// reverse the nodes of the list from position left to position right, and return the reversed list.

// ---------------------------------------------------------------------------
// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// ---------------------------------------------------------------------------
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

const reverseBetween = (head, left, right) => {
  let start = head
  let cur = head;
  let i = 1;

  while (i < left) {
    start = cur;
    cur = cur.next
    i++;
  }
  
  let prev = head;
  let tail = cur;

  while (i <= right) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
    i++;
  }
  
  start.next = prev;
  tail.next = cur;
  
  return left === 1 ? prev : head;
};
