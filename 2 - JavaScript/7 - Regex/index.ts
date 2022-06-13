// function fun(symbole) {
//     console.log(symbole);
//     try {
//         const symb = symbole.match(/[a-z]/g)
//         console.log(symb)
//         if (symb == true) return console.log("yes")
//         else return console.log("no symb")
//     } catch (error) {
//         console.log('error')
//         console.log(error)
//     }
// }

// // fun(a)
// fun("aba")
// // fun()

// ----------------------------------------------------------------
function hendleSearch(e) {
    e.preventDefault()
    let input = e.target.value
    let regex = /[a-z]/g
    let result = input.match(regex)
    console.log(result)
}