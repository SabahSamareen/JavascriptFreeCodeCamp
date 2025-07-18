/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function isSpecialChar(char) {
  return /[^a-zA-Z0-9\s\-\(\)]/.test(char);
}
function digitsInBracket(a,b){
  return b-a;
}
function telephoneCheck(str) {
  var hyphen_counter=0, bracket_flag=0, i=0, a=0, digit_array=[];
  if((isSpecialChar(str[0]))||str[i]==='-')
    return false;
  for(i;i<str.length;i++){
    if(str[i]==' ')
      continue;
    if((hyphen_counter>2)||(digit_array.length>11))
      return false;
    if(str[i]==='-')
      ++hyphen_counter;
    if(str[i]==='('){
      bracket_flag=1;
      a=i+1;
    }
    if((str[i]===')')&&(bracket_flag==0))
      return false;
    if((str[i]===')')&&(bracket_flag==1)){
      if(digitsInBracket(a,i)!=3)
        return false;
      bracket_flag=0;
    }
    if((str[i]>='0')&&(str[i]<='9'))
      digit_array.push(str[i]);
    if(isSpecialChar(str[i]))
      return false;
  }
  if((digit_array.length<10)||(digit_array.length>11))
  return false;
  if(bracket_flag==1)
    return false;
  if (digit_array.length === 10) return true;
  if (digit_array.length === 11 && digit_array[0] === '1')
    return true;
  else if (digit_array.length === 11 && digit_array[0] != '1')
    return false;
  return true;
}

telephoneCheck("555-555-5555");
//create hyphen counter
//create flag when bracket opens 
//if closed without opening exit
//first char shudnt be char other than (
//total numbers shud be 10 or 11