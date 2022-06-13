//////////// 1 //////////////
/* Web application (in the browser) communicate with a web-worker using:
a.  AJAX
b.  PostMessega
c.  Fetch
d.  Shared memory
 */

//////////// 2 //////////////
/*
Consider the following CSS selector:
`a[href*="zoom"i]`
Which of the following elements will not match the selector:
a. <a href="https://search.com/zoom">
a. <a href="https://example.org/Zoom">
a. <a href="https://example.org?zoom=test" class="zoom">
a. <a href="https://example.org" class="zoom">
*/

//////////// 3 //////////////
/*
const a = {foo:'bar'};
const b = a;
a.foo = 'test';
console.log(a===b)
*/

//////////// 4 //////////////
/*
const res = [1,2,3,4,5].reduce((a,b)=> a*b,0)
console.log(res)
*/

//////////// 5 //////////////
/*
4xx and 5xx HTTP codes families are for errors. The main different is:
a.  4xx are client errors.5xx are server errors.
b.  4xx and 5xx are servr errors.
c.  4xx are known errors. 5xx are for unknown errors.
d.  4xx are for network errors. 5xx are server errors.
*/

//////////// 6 //////////////
/*
We have 2 arryas with length N and M. What will be the smallest complexoty of finding the intersection between them?
a. O(N*M)
b. O(N+M)
c. O(N log N + M log M)
d. O(n log M)
*/

//////////// 7 //////////////
/*
Consider the attached snippet. What woild you put instead of the "???" in order to get the desired output.
const up = String.prototype.toUpperCase;
const res = ['aa','bb','cc'].map(???) //res = ['AA','BB','CC']

a. up
b. up.apply
c. up.bind
d. str=>up(str)
*/

//////////// 8 //////////////
/*
What will be the values of "a" and "b" of the attached code:
(function () {
    var a = b = 3
}())

console.log(a)
console.log(b)

a.  A defuned B undefined
b.  A defuned B defuned
c.  A undefined B defuned
d.  A undefined B undefined
*/

// const b = a;//like the same as b=3, a=b
// const a = 4

//////////// 9 //////////////
/*
Can I use the "$" unction that exist in my developer console in my web application?

a. Yes, it's part of DOM API
b. Yes, if it exists in console it available for my app
c. No, this function is paer of jQuery
d. No this is devtools API
*/

//////////// 10 //////////////
/*
The output will be:

function foo(...args) {
    return args.reduce((a,b)=> a/b)
}

console.log(foo(4,2,.5))

a.1
b.Error
c.undefined
d.4
*/

//////////// 11 //////////////
/*
The tag <template is used for:

a.Placegolder for HTML
b. Shadow DOM reference
c.Not rendered HTML
d.Placeholder for string manipulation
*/

//////////// 12 //////////////
/*
Which of the function calls in "main" function is valid?

const foo = () => true;
const bar = async () => true;
const baz = () => new Promise(resolve=> resolce(true))

function main() {
    async foo() //1
    async bar() //2
    async baz() //3
}

a. 1,2,3
b. 2,3
c. 1
d. None of them

*/

//////////// 13 //////////////
/*
We can liste for DOM event from:

a. The target element only
b. Any element in the document
c. Target element and any parent element
d. Target element and child element
*/

//////////// 14 //////////////
/*
In order to read coolkie, my code should be from the same:

a. domain
b. domain & path
c. domain & path & https
d. path
*/

//////////// 15 //////////////
/*
The output will be:

async function foo() {
    return 'A';
}

console.log(foo())

a. Promise<Pending>
b. A
c. undefined
d. Promise<A>

*/

//////////// 16 //////////////
/*
JavaScript allow creating and evaluating new functions in run-time:

a. Yes, but using "eval" is not recomended
b. No
c. Yes
d. Yes, only in "strict mode"
*/

//////////// 17 //////////////
/*
The output will be:

class Foo {
    #a = 1;
    b=2;
}

const o = new Foo();

o.b++;
o.a++

console.log(o.a)

a.1
b.NaN
c.2
d.undefuned
*/

//////////// 18 //////////////
/*
HTML allows preliading of elements. Which element does now support preloading?

a. CSS
b. Image
c. Script
d. Div
*/

//////////// 19 //////////////
/*
JavaScript allow asynchronous code in Browser using:

a. JavaScript is asynchronous by design
b. Promise API
c. DOM API
d. Callbacks
*/

//////////// 20 //////////////
/*
Generating random number in JavaScript should be done using:
a. Math.random()
b. rand()
c. randome.js library
d. Web Crypto
*/

//////////// 21 //////////////
/*
try {
    throw new Error('some-error')
    console.log('A')
} catch (error) {
    console.log('B')
} finally {
    console.log('C')
}
*/

//////////// 22 //////////////
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar

//         (function () {
//             console.log("inner func:  this.foo = " + this.foo); //undefined
//             console.log("inner func:  self.foo = " + self.foo); //bar
//         }());
//     }
// };

// myObject.func();


////////////////////////////////NODE JS/////////////////////////////
//////////// 1 //////////////
/*
process.stdin.resume();
process.stdin.setEncoding('utf8');


var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function () {
    var lines = stdin.trim().split('\n');
    for (var i = 0; i < lines.length; i++) {
        process.stdout.write(lines[i]);
    }
});

Test Input
Download Test 1 Input
5
Expected Output
Download Test 1 Output
25
Test 2
Test Input
Download Test 2 Input
25
Expected Output
Download Test 2 Output
625
*/


//////////// 2 //////////////
/*
Implement the function splitAndSort.
The function accer string and return an array of alphaetically sort words.
A word is any group of 2 of more latin charachter seperated by white space (space, new line, tab, etc)

Any non-word input (numbers, punctulation, single letters, etc) should be ommitted from the input/output

exanples:
splitAndSort('A single shot') //=>['signle', 'shot']
splitAndSort('@Foo2') //=>['Foo']
splitAndSort('foo Bar') //=>['Bar', 'foo']
*/

//////////// 3 //////////////
/*
Implement the function multiply.
The function accept number and retur another function that accept a number and return the multiplication of the 2 numbers

Example:
multiply(2)(3) //=>6
Test A: 2,5 => 10
Test B: 4,5 => 20

//NODE
process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function () {
    var inputs = stdin.trim().split(',').map(i=>parseInt(i))
    proces.stdout.write(multiply(input[0])(input[1].toString))
    }
});

*/

//////////////////////////////////////////
//------1------//
// (function () {
//     var a = b = 3;
// })();

// console.log(typeof a)
// console.log("a defined? " + (typeof a !== 'undefined')); //3 - string
// console.log("b defined? " + (typeof b !== 'undefined')); //und

// a defined? false
// b defined? true

//------2------//
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar

//         (function () {
//             console.log("inner func:  this.foo = " + this.foo); //undefined
//             console.log("inner func:  self.foo = " + self.foo); //bar
//         }());
//     }
// };

// myObject.func();

//------3-----//
/* What is the significance, and what are the benefits,
of including 'use strict' at the beginning of a JavaScript source file?


1. Makes debugging easier.
2. Prevents accidental globals.
3. Eliminates *this* coercion.
4. Disallows duplicate parameter values.
5. Makes eval() safer.
6. Throws error on invalid usage of delete
*/

//------4-----//
// function foo1() { //{bar: 'hello'}
//     return {
//         bar: "hello"
//     };
// }

// function foo2() { //undefined
//     return
//     {
//         bar: "hello"
//     };
// }

// console.log(foo1())
// console.log(foo2())

//------5-----//
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 == 0.3); //false

//------6-----//
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum(x) {
//     // console.log(x)
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1]
//     } else {
//         return function (y) { return x + y; };
//     }
// }

// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function (y) { return x + y; };
//     }
// }

//------7-----//
//What will the code below output
// var arr1 = "john".split('');
// // console.log(arr1) //['j', 'o', 'h', 'n']

// var arr2 = arr1.reverse();
// // console.log(arr2)//['n', 'h', 'o', 'j']

// var arr3 = "jones".split('');
// // console.log(arr3) // ['j', 'o', 'n', 'e', 's']

// arr2.push(arr3); //...arr3
// // console.log(arr2)

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));// length = 4 slice=

// console.log(`array 1: length= ${arr1.length} last= ${arr1.slice(-1)}`);// length = 4 slice=
// // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// //slice = (start,end) start - Required. end - Optional (Default is string length)
// const arr = "miriam"
// console.log(arr)
// const res = arr.slice(-1)
// console.log(res)

//-----8----//
// alert = הודעה קופצת רק כן
// prompt() - הודעה קופצת + הכנסה של משתנה מהלקוח
// const p = +prompt('sdf')
// console.log(p)
// confirm() - הודעה קופצת עם אופציה לתשובה של כן ולא

// console.log(1 + "2" + "2"); //122 //122
// console.log(1 + +"2" + "2"); //122 //32
// console.log(1 + -"1" + "2"); // 02 //02
// console.log(+"1" + "1" + "2"); //unde //112
// console.log("A" - "B" + "2"); //null //NaN
// console.log("A" - "B" + 2); //null //Nan

//-----9----//
// console.log("0 || 1 = " + (0 || 1)); // 1 == true
// console.log("1 || 2 = " + (1 || 2)); // 1 == true
// console.log("0 && 1 = " + (0 && 1)); // 0
// console.log("1 && 2 = " + (1 && 2)); // 2

// console.log(false == 0)
// console.log(true == 1)

//-----10----//
// console.log(false == '0') //true
// console.log(false === '0') //false


//////////////////////////////////////////
"use strict"

//1. http://www.layerstyles.org/

//2. "use strict " //Defines that JavaScript code should be executed in "strict mode".With strict mode, you can not, for example, use undeclared variables.
//You can use strict mode in all your programs. It helps you to write cleaner code.

//3. NaN — «Not a Number»

//4. variable value exchange
// let fire = '1';
// let friut = '2';

// [friut, fire] = [fire, friut];
// console.log(fire, friut)

//5. Ready style with animation - https://codepen.io/Anna_Batura/pen/dypeoxj

//6. What will be?
//6.1.
//  let obj = {
//     "0": 2,
//     0: 4
// }

// alert(obj[0] + obj['0'])

// console.log(obj[0])
// console.log(obj["0"])

//6.2.
// enum RGB {
//     RED,
//     GREEN,
//     BLUE
// }

// console.log(RGB[1])

// 6.3
// console.log(+true)
// console.log(+false)
// console.log(+null)
// console.log(+undefined)

// 6.4
// console.log(4.55.toFixed(1) + 1) //it is string, check by typeof //4.51

// 6.5
// alert(1 / 0)

//6.6
// console.log(Math.trunc(10.52)) //give back the integer part of a number by removing any fractional digits.

//6.7
// const arr = [1, 3, , 7]

// arr.forEach((element) => {
//     console.log(element)
// })

//7. Instead of map
// let dogs = [
//     { name: "Rio", age: 4 },
//     { name: "Fifo", age: 3 },
//     { name: "Miya", age: 7 },
//     { name: "Blu", age: 5 }
// ]

// let dogsNames = Array.from(dogs, ({ name }) => name);

// console.log(dogsNames)

//8.
// console.log(undefined == false)
// console.log(null == undefined)
// console.log(null == false)

//9.
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

//10.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.length = 4

// console.log(arr)


