function removeElement(nums: number[], val: number): number {
  let lastReplaceIndex = 0
  let notVal =0 
  let replaceIndexes = []
  for(let i=0;i<nums.length;i++){
    if(nums[i] == val){
      replaceIndexes.push(i)
    }else if(replaceIndexes.length > lastReplaceIndex){
      nums[replaceIndexes[lastReplaceIndex]] = nums[i];
      replaceIndexes.push(i)
      lastReplaceIndex++;
      notVal++
    }else{
      notVal++
    }
  }
  console.log(notVal)
  console.log(nums)
  return notVal
};
