// First, we will make named functions
// We can call function before they are created, because of hoisting
helloWorld();

function helloWorld() {
    console.log("Hello World");
}


// Anonymous function - it has no name but can be assigned to variables
// We can't invoke before declaration, no hoisting on anonymous
let anon = function (var1) {
    console.log("Hi, I am anonymous function");
    console.log("My variable value is : " + var1);
}

anon(10);

// Arrow function are just like lambda functions
let arrowFunction = (var1, var2) => {
    console.log(var1 + " compared to " + var2);
    console.log(var1 === var2);
}

arrowFunction(false, false);
arrowFunction(0, false);

// Callback function - functions that get passed as params to other functions
function f1(x) {
    console.log("Inside function 1");
    console.log("End of function 1");
}

function f2(x, someFunction) {
    console.log("Start of function 2");
    someFunction(x);
    console.log("End of function 2");
}

// invoke f2, which takes f1 as parameter
f2(5000, f1);


console.log("======== Global scopes ===========")
// Anything that is globally scoped can be accessed anywhere in the script( same JS file)
console.log(a) // this is visible .. but its undefined

// vars are globally scoped due to HOISTING
var a = 5;
console.log(a) // a is visible with a value after declaration of course


// console.log(b) - b is not hoisted, so the script doesn't know what b is
let b = 10;
console.log(b)


console.log("======== Local scopes (Block scope and Functional scope) ===========")

// Block scope
// any variable inside the a {Block} that isn't a function is "Block scoped"
if (true) {
    var c = " I'm a var in a block.";
    let d = " I'm a let in block scope";
}

console.log(c); // c is globally scoped, they are visible outside the block
// console.log(d); // d blocked scoped, they are not visible outside of the block

// Function scoped
// Any variable defined in a function is a function scoped

function scopeTest() {
    var e = "I'm a var, but in a function scoped. I will not be visible outside as usual because I am inside function";
    let f = "I'm a let, but in a function scoped. I will not be visible outside";
}

