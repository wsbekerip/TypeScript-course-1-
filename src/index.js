"use strict";
/*
ПРАКТИЧНЕ ЗАВДАННЯ

2. HTML-структура:    Створити файл index.html з <button> для запуску скрипта,
                                    <select> для вибору кольору сторінки
                                    та порожнім блоком <div> для виведення результату.

3. Робота у файлі TypeScript:   Оголосити Enum із трьома кольорами.
                                Створити змінні: імʼя (string), вік (number).
                                Створити функцію, яка приймає ім'я користувача і вік, та повертає рядок-привітання.

                                Обробка подіЇ натисканням на кнопку:
                                    1) Виведення у створений div привітання користувача.
                                    2) Перебрати Enum у циклі і вивести всі його значення у вигляді списку.
                                    3) Змінити колір фону сторінки на основі обраного значення у select.

4. Компіляція та перевірка: Скомпілювати TypeScript-код у JavaScript.
                            Підключити зкомпільований файл у HTML і перевірити роботу скрипта в браузері.

5. * Додаткове завдання
    Додати ще два поля вводу:   одне <input type="text"> для введення хобі,
                                одне <input type="number"> для введення кількості років досвіду у цьому хобі.


Зміни функцію привітання так, щоб вона враховувала ім’я, вік, хобі та досвід, і повертала розширене повідомлення.

Використай умовну логіку:

- якщо досвід більше 5 років → "Вау, ти справжній експерт у [хобі]!"

- якщо досвід від 1 до 5 років → "Чудово, ти вже маєш досвід у [хобі]."

- якщо 0 або менше → "Все попереду! Починати нове хобі — це цікаво."


Приклад виводу у div:

"Привіт, Аліно! Тобі 22 роки. Твоє хобі — фотографія. Вау, ти справжній експерт у фотографія!"
*/
var Colors;
(function (Colors) {
    Colors["Blue"] = "\u0411\u043B\u0430\u043A\u0438\u0442\u043D\u0438\u0439";
    Colors["Green"] = "\u0417\u0435\u043B\u0435\u043D\u0438\u0439";
    Colors["Orange"] = "\u041F\u043E\u043C\u0430\u0440\u0430\u043D\u0447\u0435\u0432\u0438\u0439";
})(Colors || (Colors = {}));
// Знаходження елементів сторінки
const form = document.querySelector(".form");
const msgDiv = document.querySelector("#msg");
const colorSelect = document.querySelector("#colors");
// Функція, яка приймає ім'я користувача і вік, та повертає рядок-привітання (form submit)
function greeting(name, age, hobby, experience) {
    let hobbyMessage;
    if (experience > 5) {
        hobbyMessage = `Вау, ти справжній експерт у ${hobby}!`;
    }
    else if (experience >= 1) {
        hobbyMessage = `Чудово, ти вже маєш досвід у ${hobby}.`;
    }
    else {
        hobbyMessage = "Все попереду! Починати нове хобі — це цікаво.";
    }
    return `Привіт, ${name}! Тобі ${age} років. Твоє хобі - ${hobby}. ${hobbyMessage}`; // лише повертає рядок
}
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинка завантаження сторінки після відправки форми
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const hobbyInput = document.querySelector("#hobby");
    const experienceInput = document.querySelector("#experience");
    // "Витягнення" значень з input-ів та select-у
    const name = nameInput.value;
    const age = Number(ageInput.value); // з input-ів завжди повертається тип даних string, тому приводимо до типу даних number
    const hobby = hobbyInput.value;
    const experience = Number(experienceInput.value);
    msgDiv.textContent = greeting(name, age, hobby, experience);
    // Перебір enum та зміна фону сторінки на основі обраного значення у select
    for (const color of Object.values(Colors)) {
        console.log(color);
    }
    document.body.style.backgroundColor = colorSelect.value;
});
