// const arrFun = <T>(num: T): T => {
//     // number
//     return num
// }

// let x: number = 3
// let y: string = "3"
// let a: boolean = true

// console.log(arrFun(x))
// console.log(arrFun(y))
// console.log(arrFun(a))

// 1. arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Check each number – if it is even, print it, otherwise print a message saying that the number is odd.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

//--------------------------------------------//
// 2. Write the function sumArrays which receives two arrays and returns their sum.
// For example: [1, 4, 3] & [2, 5, 1] => [3, 9, 4]

const arr1 = [1, 4, 3]
const arr2 = [2, 5, 1]
const arr3 = []

for (let y = 0; y < arr1.length; y++) {
    arr3.push(arr1[y] + arr2[y])
}

console.log(arr3)

/******************************************/

// const sum = arr1.map((arr, index) => arr + arr2[index])

// console.log(sum)


//---------------------------------------------//

// 4. Read numbers from the user, until the number 999 is entered. For each number:
// a. Print if it is divisible by 3.
// b. If it is bigger by more than 10 from the previous number, print a suitable message.

// const num1 = +prompt('Enter first num')
// const num2 = +prompt('Enter second num')

// const arr = [num1, num2]

// console.log(arr)


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         console.log(`div by 3 ${arr[i]}`)
//     }

//     if (arr[i] == arr[i - 1] * 10) {
//         console.log(arr[i])
//     }
// }

//-----------------------------------------------//

// 5. Implement the function getAsterisks(length) which returns a string of asterisks.
// The number of asterisks in the string is determined by length.
// For example: when the requested length is 4, it returns '****'

// 6. Read a number from the user (keep it as string such as “24367”) and then:
// i. Print each of its digits in a separate line.
// ii. Calculate the sum of its digits.
// iii. Calculate the multiplication (מכפלה ) of its digits.
// iv. Sum its first and last digits.
// v. Print it with its first and last digits swapped. (2731 => 1732)
// vi. Check whether it is symmetric. (like this number: 95459)
// vii. Print the number reversed.