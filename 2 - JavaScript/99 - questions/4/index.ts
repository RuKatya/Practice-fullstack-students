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

// 6.8



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

