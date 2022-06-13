var item = document.querySelector('.item');
var body = document.querySelector('body');
function hendleUp() {
    console.log("u");
    item.style.top = '0px';
}
function hendleDown() {
    console.log("d");
    item.style.bottom = '0px';
}
function hendleLeft() {
    console.log("l");
    item.style.left = '0px';
}
function hendleRight() {
    console.log("r");
    item.style.right = '0px';
}
// body.addEventListener('keyup', (e) => {
//     console.log(e.code)
//     if (e.code == "ArrowUp") {
//         hendleUp()
//     } else if (e.code == "ArrowDown") {
//         console.log('down')
//         hendleDown()
//     } else if (e.code == "ArrowRight") {
//         console.log('right')
//         hendleRight()
//     } else if (e.code == "ArrowLeft") {
//         console.log('left')
//         hendleLeft()
//     }
// })
body.addEventListener('keyup', function (e) {
    console.log(e.code);
    switch (e.code) {
        case "ArrowUp":
            console.log("up");
            hendleUp();
            break;
        case "ArrowDown":
            console.log('down');
            hendleDown();
            break;
        case "ArrowRight":
            console.log('right');
            hendleRight();
            break;
        case "ArrowLeft":
            console.log('left');
            hendleLeft();
            break;
        default:
            console.log('defualt');
    }
});
