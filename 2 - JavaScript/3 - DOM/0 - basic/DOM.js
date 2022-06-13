/* DOM - document object model*/
/*
דוקומט הוא נקודה ראשית והיא כניסה ראשית לעמוד, דרקו ניתן לראות את כל התגיות
למשל:
console.log(document.documentElement) //מראה לנו קוד של כל העמוד
console.log(document.body)
*/

/* מזה קולקציות?
קולקציה זה אוסף של תגיות
*/

/*
ניתן למשוך בעזרת גאבהסקריפט קולקציות שיש בתוך העמוד.
אחד הדרכים זה:
*/

//ניתן למשוך בעזרת סאלאקטור קלאס, שביל זה אנחנו רושים בתוך הסוגריים את הסלקטור הרצוי, כמו גם
//CSS
// const list = document.querySelectorAll('.list');
// console.log(list)

// const li = document.querySelectorAll('li')
// console.log(li)

// const li__item = document.querySelectorAll('li.list__item')
// console.log(li__item)

// const li_in_li = document.querySelectorAll('li.list__item, .li__in__li')
// console.log(li_in_li)

// const list_li = document.querySelectorAll('.list .list__item')
// console.log(list_li)

// const listID = document.querySelectorAll('#liID')
// console.log(listID)

// const listAttribute = document.querySelectorAll('[data-item]')
// console.log(listAttribute)

// const listAttributeNum = document.querySelectorAll('[data-item="40"]')
// console.log(listAttributeNum)

//------------------------------------//
/*

*/

// console.log(list[0])

// for (const li of list_li) {
//     console.log(li)
//     // li.innerHTML = "<p>text</p>"
// }

// li__item.forEach(item => {
//     console.log(item)
// })

//------------------------------//
/*

*/

// const items = list[1].querySelectorAll('li')
// console.log(items)

//--------------------------------//
/*
מחזיר את האובייקט הראשון
*/

// const listQueryFirst = document.querySelector('li')
// console.log(listQueryFirst)

// listQueryFirst = document.querySelector('li') ==  listQueryFirst = document.querySelectorAll('li')[0]

//-------------------------------//
/*
ניתן לחפש לא רק דרך
QUERY
אלא גם בעזרת ID
לא צריך לרשום סולמית אלא רק השם, כי ברור למה אנחנו מתכוונים
*/
// const elem = document.getElementById('liID')
// console.log(elem)

// const elem2 = document.getElementsByTagName('li') //מחזיר קולקצית
// console.log(elem2)

// const elem3 = document.getElementsByClassName('list__item')//מחזיר קולקציות ולא יחיד
// console.log(elem3)

// const elem4 = document.getElementsByName('name')//מחזיר קולקציות ולא יחיד
// console.log(elem4)

//--------------------------------//
/*
קולקציה חיה וסטטית
*/

// const listStatic = document.querySelectorAll('.list__item')

// const listLive = document.getElementsByClassName('list__item')


// console.log('----------------------')
// console.log(listStatic)
// console.log(listLive)

// const lessonList = document.querySelector('.list');
// lessonList.insertAdjacentHTML(
//     "beforeend",
//     '<li class="list__item">New</li>'
// )

/* ממליצה לעבור בנוסף על שני אפשרויו: */
//     .closest
//     .matches


// https://developer.mozilla.org/en-US/docs/Web/API/Window