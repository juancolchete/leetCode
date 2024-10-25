const romanNumbers ={
   "I":1,
   "V":5,
   "X":10,
   "L":50,
   "C":100,
   "D":500,
   "M":1000,
}

function romanToInt(s: string): number {
    let baseDecimal = 0
    for(let i=0;i<s.length;i++){
        let baseDecimalItem = romanNumbers[s[i]]
        if(i<s.length-1){
            if(baseDecimalItem >= romanNumbers[s[i+1]]){
                baseDecimal += baseDecimalItem
            }else{
                baseDecimal -= baseDecimalItem
            }
        }else{
            baseDecimal += baseDecimalItem
        }
    }
    return baseDecimal
};
