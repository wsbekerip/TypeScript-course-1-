"use strict";
//const firstName: string = "Sasha";
//const lastName: string = "Ivanov";
//const pi: number = 3.14;
//console.log(`${firstName} ${lastName}`);
// Вивести 10 консоль.логів у консоль  // Вивести тільки парні
//for (let i = 0; i < 10; i++) {
//if(i % 2 === 0){
// console.log(`Число з циклу for - ${i}`);
//}
//}
//console.dir(document);
// Задача: створити невеликий додаток, який може обчислити факторіал числа
const form = document.querySelector(`#factorial-form`);
const stepsList = document.querySelector(`#factorial-steps`);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Очищаємо список перед виведенням нових результатів
    stepsList.textContent = '';
    // Отримати введене число
    const numberInput = document.querySelector('#number');
    const number = Number(numberInput.value); // приводимо змінну до типу number
    // Обчислення факторіалу та додавання кожної ітерації до списку
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItem = document.createElement('li');
        listItem.textContent = `${factorial}`; // запис проміжного добудку для цього рядку
        stepsList.appendChild(listItem);
    }
});
