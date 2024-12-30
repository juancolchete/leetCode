function mySqrt(x: number): number {
  let halfNumber = x
  while(halfNumber * halfNumber > x){
    halfNumber /= 2
  } 
  let result = halfNumber
  if(result * result == x){
    return result
  }
  while(result*result < x){
    result++
  }
  result = Math.floor(result)
  if(result*result > x){
    result--
  }
  return result
};
