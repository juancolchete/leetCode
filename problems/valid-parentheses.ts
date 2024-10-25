let meta = {'(':true,'{':true,'[':true,')':'(','}':'{',']':'['}
function isValid(s: string): boolean {
  let valid = true
  let parentheses:string[] = []
  for(let i=0;i<s.length;i++){
    if(meta[s[i]] == true){
      parentheses.push(s[i])
    }else{
      let lastParentheses = parentheses.pop()
      if(meta[s[i]] != lastParentheses){
        valid = false
        break
      }
    }
  }
  if(parentheses.length > 0){
    valid = false;
  }
  return  valid
};
