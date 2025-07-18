/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/


function specialChar(char){
  if(char=='_') return true;
  return /[^a-zA-z0-9]/.test(char);
}
function palindrome(str) {
  var i=0,j=str.length-1;
  for(i,j;i<str.length/2;i++,j--){
  while(specialChar(str[i])||specialChar(str[j]))
  {if(specialChar(str[i]))
    i+=1;
    if(specialChar(str[j]))
    j-=1;
  }  
    var a=str[i],b=str[j];
    b=b.toLowerCase();
    a=a.toLowerCase();
    if(a!=b)
    return false;
  }
  return true;
}

console.log(palindrome("eye"));