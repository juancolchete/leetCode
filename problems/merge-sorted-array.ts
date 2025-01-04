/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let mi = 0
  let ni = 0
  let tnums1 = []
  let nextNum1 = nums1[mi] 
  let nextNum2 = nums2[ni] 
  let num1 = 0
  let num2 = 0
  for(let i=0;i<nums1.length;i++){
    tnums1.push(nums1[i])
  }
  for(let i=0;i<nums1.length;i++){
    num1 = nextNum1
    num2 = nextNum2
    if(num1 > num2 || mi >= m){
      ni++
      nextNum2 = nums2[ni]
      nums1[i] = num2
    }else{
      mi++
      nextNum1 = tnums1[mi]
      nums1[i] = num1
    }
  }
};
