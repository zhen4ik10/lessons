// Суворий режим
"use strict"

/* 
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/
document.addEventListener('click', itemActive)
function itemActive(e) {
    const targetElement = e.target
    targetElement.closest('div.item') ? targetElement.classList.toggle('active') : targetElement.classList.remove('active')
}

/* 
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
window.addEventListener('load', pageLoaded)
function pageLoaded(e) {
    const body = document.body
    body.classList.add('opacity')
}

/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/

const header = document.querySelector('.header')
header.addEventListener("mouseenter", hoverActive)
header.addEventListener("mouseleave", hoverActive)
    
function hoverActive(e) {
    const targetElement = e.target
    const tag = e.target.tagName
    if (e.type === "mouseenter") {
        console.log(e.type);
        console.log(e.target);
        if (targetElement.closest('.header')) {
            const footer = document.querySelector('.footer')
            footer.style.cssText = `background-color: red;`
        }
    } else if (e.type === "mouseleave") {
        console.log(e.type);
        console.log(e.target);
        if (targetElement.closest('.header')) {
            const footer = document.querySelector('.footer')
            footer.style.cssText = `background-color: #794f45;`
        }
    }
}


/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

function showConsole(e) {
    const delay = parseFloat(target.dataset.delay)
    let i = 1
    let timer = setInterval(() => {
        const numValue = parseFloat(target.getAttribute('data-maxNum'))
        target.textContent = `${++i}`
        i >= `${numValue}` ? clearInterval(timer) : null
    }, `${delay}`)
}

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target
        entry.isIntersecting ? targetElement.classList.add('show') || showConsole() || observer.unobserve(target) : 
        targetElement.classList.remove('show')   
    })    
}

let observer = new IntersectionObserver(callback, { root: null, threshold: .3 })
let target = document.querySelector('p.item')
observer.observe(target)





