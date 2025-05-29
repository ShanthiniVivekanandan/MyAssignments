//Named Function
function userProfile(name) {
    console.log(`hello,<${name}>!`);
       return name; 
}
let name ="shanthini"
userProfile(name);
//Arrow Function
let double =(number)=>
{
return number*2;
}
 let number=2;   
console.log(double(number));

//Anonymous Function
 setTimeout (function() {
    console.log("This message is delayed by 2 seconds");
},2000);
       

