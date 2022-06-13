var form = document.querySelector('form');
// console.log(form)
form.addEventListener('keyup', function (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.key === "Enter");
    var divSongs = document.querySelector('.songs');
    var inputElement = document.createElement('input');
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("name", "song");
    inputElement.setAttribute("placeholder", "Enter name of song");
    if (e.key == "Control") {
        divSongs.append(inputElement);
        inputElement.focus();
    }
    if (e.key === "Enter") {
        return false;
    }
    else {
        hendleSubmit(event);
    }
});
function hendleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
}
