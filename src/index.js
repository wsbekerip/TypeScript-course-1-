"use strict";
/*
Задача: Список студентів і вибірка одного.
        Створіть програму для університету, яка відображатиме інформацію про студентів
        та знаходитиме студента з найвищім середнім балом.

        Декомпозиція:
        1. Створити тип даних Student, який міститиме ім'я студента (name), курс (course), середній бал (averageGrade).
        2. Створити масив students, що містить об'єкти типу student з даними про студентів.
        3. Обчислити середній бал серед усіх студентів та вивести його у консоль.
        4. Знайти студента з найвищім середнім балом, та вивести дані у консоль.
*/
const students = [
    { name: "Марія", course: 2, averageGrade: 4.5 },
    { name: "Іван", course: 3, averageGrade: 4.1 },
    { name: "Олександр", course: 1, averageGrade: 4.8 }
];
let totalAverage = 0; // загальний середній бал
let highestGradeStudent = null;
let highestAverageGrade = 0; // найвищій середній бал
let sum = 0;
for (let student of students) {
    sum = sum + student.averageGrade; //після кожної ітерації, до загальної суми додається середній бал нового студента
    if (student.averageGrade > highestAverageGrade) { // якщо середній бал студента більше ніж найбільше середнє значеня всіх балів
        highestAverageGrade = student.averageGrade; // то найбільше середнє значення серед всіх студентів переймає цей новий бал
        highestGradeStudent = student; // і відповідно заміняється студент з найвищим середнім балом
    }
}
totalAverage = sum / students.length;
console.log(`Середній бал серед усіх студентів: ${totalAverage}`);
if (highestAverageGrade != null) {
    console.log(`Студент з найвищим середнім балом: `, highestGradeStudent);
}
else {
    console.log(`Студент з найвищим середнім балом не знайдений.`);
}
