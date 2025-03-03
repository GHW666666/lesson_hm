function reverseStr(str){
    for(const char of str){
        str = char + str;
    }
    return str;
}