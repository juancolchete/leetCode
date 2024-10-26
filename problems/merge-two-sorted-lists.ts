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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let lastInsert = 0
  if(list1 == null && list2 == null){
    return null
  }
  if(list1 != null && list2 == null || list1?.val < list2?.val){
    lastInsert = list1.val
    list1 = list1.next
  }else{
    lastInsert = list2.val
    list2 = list2.next
  }
  const finalList = new ListNode(lastInsert)
  let hasItem = true
  while (hasItem) {
    let getLast = (list: ListNode): ListNode =>{
      return list.next ? getLast(list.next) : list
    }
    let finalListItem = getLast(finalList)
    if(list1 != null && list2 == null || list1?.val < list2?.val){ 
      lastInsert = list1.val
      list1 = list1.next
      finalListItem.next = new ListNode(lastInsert)
    }else if(list2 != null){
      lastInsert = list2.val
      list2 = list2.next
      finalListItem.next = new ListNode(lastInsert)
    }
    if(list1 == null && list2 == null){
      hasItem = false
    }
  }
  return finalList
};
