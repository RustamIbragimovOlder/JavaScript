// Задание 1 Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cubingNumber = (number) => number ** 3;
const number1 = 2;
const number2 = 3;
console.log(
  `Сумма чисел ${number1} в кубе и ${number2} в кубе равна ${
    cubingNumber(number1) + cubingNumber(number2)
  }`
);

// Задание 2 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const salary = (rate) => rate * 0.87; // Функция расчета ЗП без НДФЛ

const userMoney = Number(prompt('Сколько Вы зарабатываете?'));

if (Number.isNaN(userMoney) || userMoney < 0) {
  alert('Данные введены неверно! Необходимо ввести положительное число.');
} else {
  alert(
    `Размер заработной платы за вычетом налогов равен ${salary(userMoney)}`
  );
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const a = prompt('Введите число 1');
const b = prompt('Введите число 2');
const c = prompt('Введите число 3');
const findMax = (a, b, c) => Math.max(a, b, c);
alert(
  `Среди чисел ${a}, ${b} и ${c} максимальное значение ${findMax(a, b, c)}`
);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них): 1. Сложение 2. Разность 3. Умножение 4. Деление Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const additionNumbers = (a, b) => a + b;
const differenceNumbers = (a, b) => (a >= b ? a - b : b - a);
const multiplicationNumbers = (a, b) => a * b;
const dividingNumbers = (a, b) => a / b;
console.log(additionNumbers(9, 5));
console.log(differenceNumbers(9, 5));
console.log(differenceNumbers(9, 9));
console.log(differenceNumbers(5, 9));
console.log(multiplicationNumbers(9, 5));
console.log(dividingNumbers(9, 5));
