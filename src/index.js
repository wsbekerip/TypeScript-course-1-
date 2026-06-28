"use strict";
/*
Задача 1: Створити функцію для обчислення площі прямокутника.
            Функція приймає два аргументи: ширина і довжина прямокутника.
*/
function calcRectangularArea(length, width) {
    return `Площа прямокутника: ${length * width}см2`;
}
console.log(calcRectangularArea(5, 3));
/*
Задача 2: Створити функцію для створення об'єкта користувача зі вказаним ім'ям, віком та роллю.
*/
var Role;
(function (Role) {
    Role["Admin"] = "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440";
    Role["User"] = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447";
    Role["Guest"] = "\u0413\u0456\u0441\u0442\u044C";
})(Role || (Role = {}));
function createUser(name, age, role = Role.Guest) {
    return { name, age, role };
}
const user1 = createUser('Олександр', 30, Role.Admin);
const user2 = createUser('Ірина', 25, Role.User);
const user3 = createUser('Кирило', 44);
console.log(user1);
console.log(user2);
console.log(user3);
/*
Задача 3: Створити функцію для перевірки пароля на відповідність вимогам.
            Перший аргумент - пароль.
            Другий, опціональний аргумент - мінімальна довжина пароля.
*/
function validatePassword(password, minLength) {
    if (minLength === undefined) {
        minLength = 6;
    }
    return password.length >= minLength;
}
console.log(validatePassword(`abc`));
console.log(validatePassword(`strongpass`, 12));
console.log(validatePassword(`supersecurepassword`, 5));
/*
Задача 4: Написати функцію яка приймає довільну кількість чисел, і знаходить їх середнє арифметичне.
            Використати REST оператор.
*/
function calcAverage(...numbers) {
    if (numbers.length === 0) { // calcAverage(7, 8); ----> numbers = [7, 8];
        console.log('Список чисел порожній');
        return 0;
    }
    // reduce() проходить по всіх елементах масиву і накопичує результат
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
console.log(calcAverage(5, 10, 15, 20));
