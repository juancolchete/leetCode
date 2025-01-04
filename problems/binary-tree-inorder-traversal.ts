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
function inorderTraversal(root: TreeNode | null): number[] {
  let num = []  
  function inorderTraversalSub(root: TreeNode | null): number[] {
    if(!root){
      return num
    }
    inorderTraversalSub(root.left)
    num.push(root.val)
    inorderTraversalSub(root.right)
  }
  inorderTraversalSub(root)
  return num
};
