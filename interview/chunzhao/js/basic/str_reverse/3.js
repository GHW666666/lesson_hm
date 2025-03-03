function reverseStr(str) {
  if(str=="") return 
  return reverseStr(str.substr(1)) + str[0];
}