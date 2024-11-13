function lengthOfLastWord(s: string): number {
    let wordCount = 0
    for(let i=s.length-1;i>=0;i--){
      if(s[i] != " "){
        wordCount++
      }else if(s[i] == " " && wordCount > 0){
        return wordCount
      }
    }
    return wordCount
};
