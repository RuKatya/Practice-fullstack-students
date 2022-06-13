// alert("5"[0]) //Show the first char in the string. If we will try alert("5"[1]) will get an undefined.

// --------------------------
//     console.log('one');

// setTimeout(() => {
//     console.log('two');
// }, 0)

// console.log('three');

// --------------------------
// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// console.log(animals.length)
// console.log(animals.slice(2, -1));
// ['llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion']
// arr.slice([begin[, end]])

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// --------------------------
//     let arr = ['0', '1', '2', '3'];
// let result = arr.splice(2, 1, '2');

// console.log(arr);
// console.log(result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// --------------------------
// const arr = [1, 2, 3]

// const fun = () => {
//     alert(arr)
// }

// function fun2() {
//     alert(arr)
// }

// fun()
// fun2()


// --------------------------
//     let obj1 = { a: 1 };
// let obj2 = { b: 2 };
// let obj3 = { c: 3 };

// let obj = Object.assign(obj1, obj2, obj3);

// console.log(obj1);

// --------------------------
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.fill(2, 1, 3))

// --------------------------
//         const func = ({ a, b, c }) => {
//     console.log(a, b, c);
// }

// func(3, 'front_tests', true);

// --------------------------
//         const arr = [12, 9, 6, 3]

// const result = arr.flatMap(x => [x / 3]);
// console.log(result)
// ------------- MAYBE-------------
//     let arr = (elem) => (elem, 10, 20, 30)

// let result = arr(5)

// console.log(result)
