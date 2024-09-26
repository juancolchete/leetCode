function isPalindrome(x: number): boolean {
  let palindrome = x.toString();
  for(let i=0;i< palindrome.length;i++){
    if(palindrome[i] != palindrome[palindrome.length-1-i]){
      return false
    }
  }
  return true
};
