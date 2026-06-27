/*
Задача 1: Дано масив чисел. Перебрати масив та знайти найбільше число.
*/

const numbers: number[] = [4, 2, 7, 1, 9, 5];

let maxNumber: number = numbers[0];

for (let i=0; i < numbers.length; i++) {

    if (numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}

console.log('Найбільший елемент масиву: ', maxNumber);



/*
Задача 2: Дано масив чисел. Знайти середнє значення у цьому масиві чисел.
 */

const numbers2: number[] = [10, 20, 30, 40, 50];

let sum: number = 0;
for(let num of numbers2){
    sum = sum + num;
}

const average: number = sum / numbers2.length;
console.log("Середнє значення чисел у масиві: ", average);



/*
Задача 3: Дано масив чисел. Знайти перше від'ємне число у масиві.
*/

const numbers3: number[] = [10, -20, 30, - 40, 50];
let firstNegative: number | undefined;

for(let num of numbers2) {
    if (num < 0){
        firstNegative = num;
        break;
    }
}

console.log("Перше від'ємне число у масиві: ", firstNegative);



/*
Задача 4: Обчислення вартості покупки з урахуванням знижки.
            Створити програму для обчислення вартості покупки, на основі ціни товару та величини знижки

            Декомпозиція:
            1. Створити тип даних Item, який містить назву товару (name) та ціну товару(price).
            2. Створити змінну item, яка представляє товар "Футболка" з ціною 20$.
            3. Створити змінну, яка буде містити величину знижки у вісотках.
            4. Обчислити вартість покупки з урахуванням знижки.
*/

type Item = {
    name: string;
    price: number;
};

const item: Item = { name: 'Футболка', price: 20};

const discount: number = 10; // 10% знижки

const discountAmount: number = (item.price * discount) / 100;
const totalCost: number = item.price - discountAmount;

console.log(`Вартість покупки з урахуванням знижки: ${totalCost}$`);



/*
Задача 5: Створити програму для обчислення оплати праці працівників на основі годинної ставки
            та кількості годин праці.
*/

type Employee = {
    name: string;
    hourlyRate: number; // оплата за одну годину праці
}

type PayCheck = {
    name: string;
    amount: number;
}

const John: Employee = { name: 'John', hourlyRate: 10};
const JohnAmount: number = John.hourlyRate * 40; // сума зарплати, яку мають виплатити Джону

const invoice: PayCheck = {name: John.name, amount: JohnAmount};

console.log(`Зарплата для ${invoice.name}: ${invoice.amount}$`);



/*
Задача 6: Створити програму книжкового магазину, яка буде відображати інформацію про наявні книги.
*/

type Book = {
    title: string,
    author: string,
    price: number
}

const books: Book[] = [
    {title: "Грокаємо алгоритми", author: "Адітья Бхаргава", price: 25},
    {title: "Мова програмування C++", author: "Б'ярн Страуструп", price: 20},
    {title: "Гаррі Поттер і філософський камінь", author: "Джоан Роулінг", price: 10}
];

for (let book of books) { // змінна book на кожній ітерації приймає один об'єкт типу Book з масиву books
    console.log(`Книга: ${book.title}. Автор: ${book.price}. Ціна: ${book.price}`);
}