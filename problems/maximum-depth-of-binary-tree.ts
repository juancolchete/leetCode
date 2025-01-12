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

function maxDepth(root: TreeNode | null): number {
  let curNodes:TreeNode[] = []
  if(root){
    curNodes = [root]
  } 
  let tempNodes:TreeNode[] = []
  let deep = 0
  let i = 0
  while(i < curNodes.length){
    if(curNodes[i]?.right !=null){
      tempNodes.push(curNodes[i].right)
    }
    if(curNodes[i]?.left !=null){
      tempNodes.push(curNodes[i].left)
    }
    i++
    if(curNodes.length == i){
      curNodes = tempNodes
      i=0
      tempNodes = []
      deep++
    }
  }
  return deep
};
