let s = "Hello World" 
let r=s.split(" ");
console.log("The length of the word 'world'  is" +r[1].length);

 
let k = "   fly me   to   the moon  " 
let g=k.trim("");
let f=g.split(" ");
//console.log(f);
console.log("The length of the last word 'moon'  is" +f[8].length);


function isAnagram(input1, input2) {
input1 = input1.toLowerCase();
input2 = input2.toLowerCase();

  if (input1.length !== input2.length) {
        return false;
    }

   
    let sortedFirst = input1.split("").sort().join("");
    let sortedSecond = input2.split("").sort().join("");

    return sortedFirst === sortedSecond;
}
    

console.log(isAnagram('silent','listen') );
console.log(isAnagram("hello", "world")); 
    

 