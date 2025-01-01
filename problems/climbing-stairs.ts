function climbStairs(n: number): number {
  let k1 = n
  let k2 = 0
  let t = 0
  for(let i=n;i>=0;i-=2){
    t += factorial(k1+k2)/(factorial(k1)*factorial(k2))
    k1 -= 2
    k2 += 1
  }
  return t
};
function factorial(n: number){
  let f=1
  for(let i=n;i>0;i--){
    f *= i
  }
  return f
}
