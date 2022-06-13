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
    e.preventDefault();
    var input = e.target.value;
    var regex = /[a-z]/g;
    var result = input.match(regex);
    console.log(result);
}
