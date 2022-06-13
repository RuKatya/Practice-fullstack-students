"use strict";
//npm i -g typescript
//tsc --init
// let company = 'company' //or let company:string="company"
// company = 1
// ---------TYPES----------
let firstName = 'Miriam';
let age = 12;
let year = 5;
year = null;
year = "NONE"; //show "none"
let num = 4;
num = undefined;
let text = "what";
text = 1;
let myArr = ['name', 9, true];
//----------ENUM-------------
var users;
(function (users) {
    users[users["Miriam"] = 2] = "Miriam";
    users[users["Katya"] = 25] = "Katya";
    users[users["UncleBob"] = 12] = "UncleBob";
})(users || (users = {}));
users.Miriam; // = 0
//---------OBJ + ARRAY-----------
const person = {
    name: "Miriam",
    age: 30,
    country: "Israel",
    hobbies: "dogs"
};
person.hobbies;
// const names = ["One","Two","Three"] //מאתר שהאראיי הוא רק טקסט
// const names = ["One","Two","Three",1] //מאתר שזה גם  טקסט וגם מספר
// const names:string[] = ["One","Two","Three",1] //מעדכנים שהאראיי הוא סטרינג
// const names:Array<string> = ["One","Two","Three",1] //מעדכנים שהאראיי הוא סטרינג
// const names:number[] = [1,2,3] //מעדכנים שהאראיי הוא מספרים
// const all:(number|string)[]=["1",3]
// const all1:any[]=["1",3]
// names.push(1)
// function plus(one: number, two: number): number {
//     return one + two
// }
// function plus1(one: number, two: number): void {
//     return one + two
// }
// type TypeCity = {
//     bornYear: number
//     population: number
//     title: string
// }
// const TelAviv: TypeCity = {
//     bornYear: 1990,
//     population: 800000,
//     title: " TelAviv"
// }
// TelAviv.bornYear
// const allCities:TypeCity[] = [
//     TelAviv,
//     {
//         bornYear: 1384,
//         population:123000,
//         title: "Haifa"
//     },
// ]
const getArray = (item) => {
    return [...item];
};
const numArray = getArray([1, 2, 5]);
function getArray1(item) {
    return [...item];
}
const numArray1 = getArray([1, 2, 5, 2]);
//done
