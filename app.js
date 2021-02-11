const tabsBtn = document.querySelectorAll('.tabs__nav-btn') // выбрали все кнопки
const tabsItems = document.querySelectorAll('.tabs__item') // выбрали все контенты табов

tabsBtn.forEach(onTabClick) //метод forEach
// Метод «arr.forEach(callback[, thisArg])» используется для перебора массива. Он для каждого элемента массива вызывает функцию callback. Этой функции он передаёт три параметра callback(item, i, arr):

function onTabClick(item){ // item - каждая конкретная кнопка
    item.addEventListener('click', function(){ // обработчик событий click
        
        let currentBtn = item // текущая кнопка
        let tabId = currentBtn.getAttribute('data-tab') // значение атрибута заключили в переменную, Получить атрибут 
        let currentTab = document.querySelector(tabId) // таб, который мы хотим показывать, будем выбирать его по id

        if(! currentBtn.classList.contains('active')){ // если кнопка имеет класс active, то...
            tabsBtn.forEach(function(item){ // ... то для каждой конкретной кнопки 
                item.classList.remove('active') // ... удалить класс active
            })
    
            tabsItems.forEach(function(item){ // ... то для контента таба удалить класс active
                item.classList.remove('active')
            })
    
            currentBtn.classList.add('active') // и добавить класс active для кнопки
            currentTab.classList.add('active') // и добавить класс active для контента таба
        }
    })
}

document.querySelector('.tabs__nav-btn:nth-child(2)').click(); // имитация нажатия второй кнопки по умолчанию