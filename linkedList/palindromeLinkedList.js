// https://leetcode.com/problems/palindrome-linked-list/

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// ---------------------------------------------------------------------------
// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: head = [1,2]
// Output: false

const isPalindrome = (head) => {
  let straight = '';
  let reversed = '';
  
  while (head) {
    straight = straight + head.val;
    reversed = head.val + reversed;
    head = head.next;
  }
  
  return straight === reversed;
};
