/*
Задача на практику: Створити програму для обчислення вартості замовлення в інтернет-магазині.
                    Декомпозиція:
                    1. Створити тип даних для представлення товару з назвою та ціною.
                    2. Створити функцію для обчислення загальної вартості замовлення, яка приймає масив товарів, як аргумент, та повертає загальну суму.
                        Примітка: Перевірити, що масив товарів не порожній, а ціна кожного товару більше нуля.
*/

type Product = {
    name: string,
    price: number
}

function calcOrderTotal(products: Array<Product>): number {
    if (products.length === 0) {
        console.log(`Замовлення порожнє`);
        return 0;
    } 

    let total = 0;
    for (const product of products) {  // product - поточний товар ітерації оброблення масиву
        if (product.price <= 0) {
            console.log(`Некоректна ціна для товару "${product.name}"`);
            continue;  // пропускаємо товар з некоректною ціною і продовжуємо перебір масиву products
        }

        total = total + product.price;
    }

    return total;
}

const products: Array<Product> = [
    {name: "Футболка", price: 25},
    {name: "Шорти", price: 30},
    {name: "Носки", price: -5}
];

const orderTotal = calcOrderTotal(products);
console.log(orderTotal);

//console.log(calcOrderTotal(products));
