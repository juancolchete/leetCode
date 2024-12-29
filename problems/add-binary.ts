function addBinary(a: string, b: string): string {
  let bigNumbers = a
  let secondNumbers = b
  if(secondNumbers.length > bigNumbers.length){
    bigNumbers = b
    secondNumbers = a
  }
  let next = ''
  let result = ''
  let bigLen = bigNumbers.length
  let secondLen = secondNumbers.length
  for(let i=1;i<=bigLen;i++){
    let bigNum = bigNumbers[bigLen-i]
    let secondNum = secondNumbers[secondLen-i]
    if(bigNum == '1' && secondNum == '1' && next == '1'){
      next = '1'
      result = '1'+result
    }else if(bigNum == '1'  && (secondNum == '1' || next == '1')){
      next = '1'
      result = '0'+result
    }else if(secondNum == '1'  && (bigNum == '1' || next == '1')){
      next = '1'
      result = '0'+result
    }else if(bigNum == '1' || secondNum == '1' || next == '1'){
      next = '0'
      result = '1'+result
    }else{
      result = '0'+result
    }
    if(i == bigLen && next == '1'){
      result = '1'+result
    }
  }
  return result
};
