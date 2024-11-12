function strStr(haystack: string, needle: string): number {
let firstLetterIndex =0
let needleLen = needle.length
let needleIndex = 0
for(let i=0;i<haystack.length;i++){
  console.log(haystack[i],needle[needleIndex])
  if(needleIndex == 0){
    firstLetterIndex = i
  }
  if(haystack[i] == needle[needleIndex]){
    needleIndex++
    if(needleIndex == needleLen){
      return firstLetterIndex
    }
  }else{
    if(firstLetterIndex + needleLen < haystack.length){
      i=firstLetterIndex
    }
    needleIndex = 0
  }
}
return -1
};
