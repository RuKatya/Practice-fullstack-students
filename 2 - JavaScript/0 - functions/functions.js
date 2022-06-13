// const fun = () => {
//     console.log(a)
// }

// // fun()

// let a = 10;

// function fun2() {
//     console.log(b)
// }

// const b = 2

// fun2()





// function f1() {
//     console.log(`a1 = ${a}`)
// }

// f1();

// function f2() {
//     let a = 53;
//     // a = 44;
//     console.log(`a2 = ${a}`)
// }

// f2();

// f2();
// f1();

// let count = 0;
// function step() {
//     let count = 0;
//     count++
//     console.log(count)
// }

// step()
// step()
// step()

//----------------------------//
// function sum(a, b) {
//     a + b
//     // return a + b;
// }

// console.log(sum(1, 3));
// console.log(sum(sum(1, 2), sum(3, 4)))


//---------------------------//
// what is IIFE ? Immediately Invoked Function Expression:
//         Function that running herself.

//פונקציה שקוראת לעצמה

// ((x) => { console.log(x) })("text")

// (() => { console.log('Hello') })()
// ((num) => { console.log(num) })(9)

//------------------------------//
//פונקציה בתוך פונקציה
// const foo = 4;

// const test = () => {
//     const baz = () => {
//         console.log(foo)
//     }
//     baz();
// }

// // baz();
// test();

//------------------------//
// let msg; //will be undefined

// console.log(msg);

// const msg = 'msg'; //undefind

// msg();
// const msg = () => { //Cannot access 'msg' before initialization - anonumos function not work if we calling it before, it becouse this function not going up
//     return console.log('Hi')
// }

// function msg() { //return the function in console.log after we calling it
//     return console.log('Hi')
// }
