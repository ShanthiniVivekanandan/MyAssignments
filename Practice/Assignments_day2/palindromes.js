
function reverseString( original) {
 let reversed="";
  reversed = original.split("").reverse().join("");
console.log(reversed);
   return reversed; 
}

let original="shanthini"

let reversedStr=reverseString(original);



function isPalindrome(original,reversedStr) {
  

if (original===reversedStr) {
    return true;
  
} else {
    return false;
       
}
console.log(ans);

}
let result=isPalindrome(original,reversedStr);
console.log(result);
