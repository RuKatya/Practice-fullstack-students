"use strict";

var arr = [{
  name: "Katya",
  lastName: "Ru",
  age: "28"
}];

function hendleSubmit(e) {
  e.preventDefault();
  var text = document.querySelector('.textPush');
  var name = e.target.children.name.value;
  var lastname = e.target.children.lastname.value;
  var age = e.target.children.age.value;
  console.log(text);

  function hendlePush() {
    arr.push({
      name: name,
      lastName: lastname,
      age: age
    }); // console.log(arr)
  }

  console.log(arr);
  var textAll = arr.forEach(function (a) {
    return text.innerText += "\n        ".concat(a.name, "\n        ");
  });
  hendlePush();
  return textAll;
}

console.log(arr);