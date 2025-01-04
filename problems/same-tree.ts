/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let isSame = true
  function isSameTree(p: TreeNode | null, q: TreeNode | null){
    if((p == null && q == null)){
      return isSame
    } 
    if(p?.val != q?.val){
      isSame = false
      return isSame
    }
    isSameTree(p.left,q.left)
    isSameTree(p.right,q.right)
  }
  isSameTree(p,q)
  return isSame
};
