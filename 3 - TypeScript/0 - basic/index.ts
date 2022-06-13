//npm i -g typescript
//tsc --init

// let company = 'company' //or let company:string="company"

// company = 1

// ---------TYPES----------
let firstName: string = 'Miriam'

let age: number = 12

let year: number | null | 'NONE' = 5
year = null
year = "NONE" //show "none"

let num: number | undefined = 4
num = undefined

let text: any = "what"
text = 1;

let myArr: (string | number | boolean)[] = ['name', 9, true]

//----------ENUM-------------
enum users {
    Miriam = 2, //ניתן לבחור מאיזה מספר המספור יתחיל
    Katya = 25, //ניתן גם לעדכן כל אחד בנפרד מה יהיה המספר שלו
    UncleBob = 12
}

users.Miriam // = 0

//---------OBJ + ARRAY-----------
const person: {
    name: string
    age: number
    country: "America" | "Russia" | "Israel"
    hobbies: string
    // bornedIn?:string //אם אין את המשתנה, הטייפסקריפט יתריע על כך
} = {
    name: "Miriam",
    age: 30,
    country: "Israel",
    hobbies: "dogs"
}

person.hobbies

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

const getArray = <T>(item: T[]): T[] => {
    return [...item]
}

const numArray = getArray<number>([1, 2, 5])

function getArray1<Type>(item: Type[]): Type[] {
    return [...item]
}

const numArray1 = getArray<number>([1, 2, 5, 2])

//done