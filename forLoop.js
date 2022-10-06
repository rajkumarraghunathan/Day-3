//for
let a=[1,2,3,4,5];
for(let i=0;i<a.length;i++)
{
console.log(i);
}// Print the number

//for in
var person = {
   fname: "Raj",
   lname: "kumar",
   age: 24
}; 
for (let x in person) {
   console.log(x + ": "+ person[x])
}

//forEach
var names = ["Raj", "Ram", "kumar", "ravi", "rajan"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}

