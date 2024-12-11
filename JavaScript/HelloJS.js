console.log("============Printing in console in JavaScript and variables==========")

// JS is loosely typed, so I can declare variables without declaring the datatypes
// We can easily reassign variables

a = 100;
a = true;
a = null
a = "Now I am String"

// JS will assign variables with "var" by default
b = "I am a var! Because let/const weren't specified";
let b2 = "I am a let! More modern version of var. We will typically use this"
const b3 = "I am a const! like final in java"


// Array, JS array can hold any datatypes
let arr = [6, "a string", false, null, { objectVal1: 5, objectVal2: 6 }];
// Array are flexible in general, add any data you want
arr.push("I'm a new item to array");
console.log(arr);



console.log("============Testing Coercion==========")

// Converting from one datatype to another
// Let's see what JS decides as the datatypes type for these variables
let testVar = "5" * 5;
console.log("String times number is : " + testVar + " " + typeof testVar);
// number - JS assumes we are doing math. Pretty much any operator beside "+" will result in number

let testVar2 = "5" + 5;
console.log("String times number is : " + testVar2 + " " + typeof testVar2);

// Let's see the + operator with more than two values
let testVar3 = 5 + 5 + "5"
console.log("String times number is : " + testVar3 + " " + typeof testVar3);



console.log("============Truthy and Falsy==========")
// In JS all values can be evaluated to boolean
// Most will result to truth but 6 will evaluate to false

// Writing a function that compares two values to demonstrate truthy/falsy
function testTrueFalse(var1) {
    console.log("is " + var1 + " truthy");
    if (var1) {
        console.log("Yes!");
    } else {
        console.log("No!");
    }
}

testTrueFalse(0);
testTrueFalse(1);
testTrueFalse("");
testTrueFalse(" ");

// while any non-zero number is truthy, the boolean true evaluates to the number 1


