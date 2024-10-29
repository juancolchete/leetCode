function removeDuplicates(nums: number[]): number {
    let expectedNums: number[] = []
    let lastNumber = -101
    let counter =0
    for(let i=0;i<nums.length;i++){
      if(lastNumber != nums[i]){
        nums[counter] = nums[i]
        expectedNums.push(nums[i])
        lastNumber = nums[i]
        counter++
      }
    }
    return expectedNums.length
};
