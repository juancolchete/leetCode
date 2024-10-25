function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = "";
  if(strs.length == 1){
    return strs[0]
  }
  for(let i=0;i<strs[0].length;i++){
    let found = false
    for(let j=1;j<strs.length;j++){
      found = false
      if(strs[0][i] != strs[j][i] ){
        break
      }
      found = true
    }
    if(found){
      longestPrefix += strs[0][i]
    }else{
      break
    }
  }
  return longestPrefix;
};
