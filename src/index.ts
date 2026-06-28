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

enum Colors {
    Blue = 'Блакитний',
    Green = 'Зелений',
    Orange = 'Помаранчевий'
}

// Знаходження елементів сторінки
const form = document.querySelector(".form") as HTMLFormElement;
const msgDiv = document.querySelector("#msg") as HTMLDivElement;
const colorSelect = document.querySelector("#colors") as HTMLSelectElement;

// Функція, яка приймає ім'я користувача і вік, та повертає рядок-привітання (form submit)
function greeting(name: string, age: number, hobby: string, experience: number): string {

    let hobbyMessage: string;
    
    if (experience > 5) {
        hobbyMessage = `Вау, ти справжній експерт у ${hobby}!`;
    } else if (experience >= 1) {
        hobbyMessage = `Чудово, ти вже маєш досвід у ${hobby}.`;
    } else {
        hobbyMessage = "Все попереду! Починати нове хобі — це цікаво.";
    }

    return `Привіт, ${name}! Тобі ${age} років. Твоє хобі - ${hobby}. ${hobbyMessage}`; // лише повертає рядок
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупинка завантаження сторінки після відправки форми


    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const ageInput = document.querySelector("#age") as HTMLInputElement;
    const hobbyInput = document.querySelector("#hobby") as HTMLInputElement;
    const experienceInput = document.querySelector("#experience") as HTMLInputElement;


    // "Витягнення" значень з input-ів та select-у
    const name: string = nameInput.value;
    const age: number = Number(ageInput.value); // з input-ів завжди повертається тип даних string, тому приводимо до типу даних number
    const hobby: string = hobbyInput.value;
    const experience: number = Number(experienceInput.value);

    msgDiv.textContent = greeting(name, age, hobby, experience);

    // Перебір enum та зміна фону сторінки на основі обраного значення у select
    for (const color of Object.values(Colors)) {
        console.log(color);
    }

    document.body.style.backgroundColor = colorSelect.value;
})



