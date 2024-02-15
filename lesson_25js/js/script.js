// Суворий режим
"use strict"

/*
Задача №1
Отримати в константу елемент <body>
*/
console.log(`- Задача №1 -`)
const body = document.body
console.log(body)

console.log(` `);
/*
Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
*/
console.log(`- Задача №2 -`)
let createElement = (numItems = 1) => {
    const ulElement = document.createElement("ul")
    console.log(ulElement);
    for (let i = 1; i <= numItems; ++i) {
        const liElement = document.createElement("li")
        liElement.insertAdjacentText("beforeend", `Item ` + [i])
        ulElement.insertAdjacentElement("beforeend", liElement)
    }
    body.insertAdjacentElement("afterbegin", ulElement)
}
createElement(10)

console.log(` `)
/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.
*/
console.log(`- Задача №3 -`)
body.classList.add("loaded")
body.classList.contains("loaded") ? body.style.color = `green` : null
console.log(body);

console.log(` `)
/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
console.log(`- Задача №4 -`)
const itemElements = document.querySelectorAll(".item")
itemElements.forEach((item, index) => {
    item.classList.add("active")
    item.textContent = `Eлемент №` + ++index
    // item.insertAdjacentText("afterbegin", `Eлемент №` + ++index)
})
console.log(itemElements);

console.log(` `)
/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
console.log(`- Задача №5 -`)
const btnElement = document.querySelector(".button")
let scrollIntoView = (e) => {
    const block = btnElement.dataset.scroll
    btnElement.scrollIntoView({
        block: block,
        inline: "nearest",
        behavior: "smooth"
    })
    console.log(`Прокрутиться до початку кнопки (${block}), значення можна змінити в  (data-атрибут)`);
}
scrollIntoView()

console.log(` `)
/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/
console.log(`- Задача №6 -`)
const link = document.querySelector(".link")
if (!link.hasAttribute("data-speed")) {
    link.dataset.speed = "100"
    if (link.getAttribute("data-speed") < 200) {
        link.style.color = "red"
        console.log(+link.getAttribute("data-speed"));
    } else {
            console.log("ERROR");
    }
}