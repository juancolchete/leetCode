let meta = {'(':[1,0], ')':[-1,0],'{':[1,1], '}':[-1,1],'[':[1,2],']':[-1,2]}
function isValid(s: string): boolean {
  let parentheses = [0,0,0] 
  let valid = true
  for(let i=0;i<s.length;i++){
    let metaItem = meta[s[i]]
    parentheses[metaItem[1]] +=  metaItem[0]
    if(parentheses[metaItem[1]] < 0){
      valid = false
      break
    }
  }
  if(valid == true && parentheses[0] + parentheses[1] + parentheses[1] != 0){
    valid = false;
  }
  return  valid
};
