function checkStringEquality (s1,s2){
  if (s1.length !== s2.length){
    return false;
  }


const sortedStr1 = s1.split('').sort().join('');
const sortedStr2 = s2.split('').sort().join('');

return sortedStr1 === sortedStr2;

}   

const str1 = 'abc', str2 = 'bca'; 
console.log(checkStringEquality(str1,str2));

const str3 = 'abcd', str4 = 'abc';
console.log(checkStringEquality(str3,str4));
