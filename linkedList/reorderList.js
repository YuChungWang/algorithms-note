// https://leetcode.com/problems/reorder-list/

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// ---------------------------------------------------------------------------
// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// ---------------------------------------------------------------------------
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

const reorderList = (head) => {
  const second = split(head);
  second = reverse(second);
  merge(head, reversedSecondHalf);
}

const split = (node) => {
  let slow = node;
  let fast = node;

  while (fast & fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondHalf = slow.next;
  slow.next = null;

  return secondHalf;
}

const reverse = (node) => {
  const [prev, current] = [null, node];
  
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }

  return prev;
}

const merge = (l1, l2) => {
  let l1Next = null;
  let l2Next = null;

  while (l1 || l2) {
    l1Next = l1.next;
    l2Next = l2.next;

    l1.next = l2;
    l2Next = l1Next;

    l1 = l1Next;
    l2 = l2Next;
  }
}
