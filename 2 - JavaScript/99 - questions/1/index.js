// //////////////---1---/////////////
// const obj = {
//     log: ['a', 'b', 'c', 'd'],
//     get test() {
//         if (this.log.length === 0) {
//             return undefined
//         }
//         return this.log[this.log.length - 1];
//     }
// }

// console.log(obj.log.length)

// console.log(obj.test)

// //////////////---2---/////////////
// let a = "Hello world"
// a[0] = 'h'
// console.log(a)

// //////////////---3---/////////////
// let foo = function () {
//     return {
//         a: 0,
//         b: 3,
//         c: 7
//     }
// }

// console.log(foo())

// //////////////---4---/////////////
// const a = "JavaScript"
// const b = new String(a)
// console.log(b)

// console.log(typeof a)
// console.log(typeof b)
// console.log(a === b)

// //////////////---5---/////////////
// const result = eval('(25*5-15)/11')
// console.log(typeof result)

// //////////////---6---/////////////
// let obj = {}
// let value;

// obj.a = 5;
// value = obj
// value.a = 17

// console.log(value.a)
// console.log(obj.a)

// //////////////---7---/////////////
// const func = () => { };
// const result = func instanceof Object;

// console.log(result);


// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto)

// console.log(auto instanceof Car);
// // expected output: true

// console.log(auto instanceof Object);
// // expected output: true


// //////////////---8---/////////////
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.fill(2, 1, 3))

// Shani - [1, 2, 2, 2, 5]
// Marina - []
// Eitan - [1, 2, 2, 2, 5]

// const array1 = [1, 2, 3, 4];

// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]

// // fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]

// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]

// // arr.fill(value[, start = 0[, end = this.length]])


// //////////////---9---/////////////
// const arr = [12, 9, 6, 3]

// const result = arr.flatMap(x => [x / 3]);
// console.log(result)

// result = [4, 3, 2, 1]


// //////////////---10---/////////////
// let arr1 = [1, 2, 3, 4];

// let aaaa = arr1.map(x => [x * 2]);
// console.log(aaaa)
// [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// let arr1 = [12, 9, 6, 3];
// let arrrrr = arr1.flatMap(x => [x / 2]);
// console.log(arrrrr);


// arr1.map(x => [x / 2]);
// console.log(arr1);


// //////////////---11---/////////////
// FLAT

// var arr1 = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]

// var arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]

// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //////////////---12---/////////////
// let a = Array();
// console.log(a.length)
// a[a.length] = 0;
// console.log(a)

// console.log(a.length)

// //////////////---13---/////////////
// const a = null

// // const b
// const result = typeof a

// console.log(result)

// const obj = [1, 2, null, 4]
// // const obj1 = [1, 2, b, 4]
// console.log(obj)
// // console.log(obj1)

// console.log(a)
// null === undefined // false
// null == undefined // true

// console.log(typeof null)
// console.log(typeof undefined)


// //////////////---14---/////////////
// const push = Array.prototype.push;
// const arr1 = [100, 200];
// const arr2 = [200, 100];

// const tests = push.apply(arr1, arr2);

// console.log(tests);


// //////////////---15---/////////////
// const func = ({ a, b, c }) => {
//     console.log(a, b, c);
// }

// func(3, 'front_tests', true); //undefined undefined undefined



// //////////////---16---/////////////
// const array1 = [1, 2, 3, 4];
// const result =
//     console.log(result)
