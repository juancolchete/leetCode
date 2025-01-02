/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let lastNode = head
  while(lastNode != null){
    while(lastNode.val == lastNode?.next?.val){
      lastNode.next = lastNode.next.next
    }
    lastNode = lastNode.next
  }
  return head
};
