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

function isSymmetric(root: TreeNode | null): boolean {
  let symetric = true
  function isSymetricSub(left: TreeNode | null,right: TreeNode | null){
    if(left == null && right == null){
      return symetric
    }
    if(left?.val != right?.val){
      symetric = false
      return symetric
    }
    isSymetricSub(left.left,right.right)
    isSymetricSub(left.right,right.left)
  }
  isSymetricSub(root.left,root.right)
  return symetric
};
