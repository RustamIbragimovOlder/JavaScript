// Задание 1:
// Создать новый файл lesson2.html
// Создать переменную и спросить у пользователя “Ваш возраст”
// Вывести на экран текст. Вам “возраст пользователя” лет
// Спросить у пользователя его имя
// Вывести на экран, Добро пожаловать на сайт “Имя пользователя”

const userAge = Number(prompt("Сколько Вам полных лет?", "Введите число")); // явное преобразование к числу: Number или унарный +
alert(`Вам ${userAge} лет.`);
let userName = String(prompt("Как Ваше имя?")); // явное преобразование к строке
alert(`Добро пожаловать на сайт, ${userName}`);

// Задание 2
// 1. Найти остаток от деления двух переменных a. let a = 13; b. let b = 5; // 3
// 2. Что выведет на экран a. let a; b. alert(a); // undefined
// 3. Что выведет на экран a. alert('abc' * 3); //Nan
// 4. Что выведет на экран a. alert( 1 / 0); b. alert(-1 / 0); // Infinity -Infinity
// 5. Что выведет на экран a. alert('2' * '3'); // 6

// Задание 3
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется в консоли. Определите, в какой строке кода
// случилась ошибка.
// 2. Необходимо вывести в консоль результат суммы данных переменных
// a. let a = '2';
// b. let b = '3';
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести текст
// a. Сумма чисел равна “результат”
// b. Разность чисел равна “результат”
// c. Произведение чисел равно “результат”
// d. Частное чисел равно “результат”
// e. Остаток от деления чисел равен “результат”

let a = "2";
let b = "3";
// или ${+a + +b}
console.log(`Сумма чисел равна ${Number(a) + Number(b)}
Разность чисел равна ${a - b}
Произведение чисел равно ${a * b}
Частное чисел равно ${a / b}
Остаток от деления чисел равен ${a % b}`);

// Задание 4
// 1. Не запуская код, определите, что выведется в консоль: console.log(String(true)); // 'true'
// 2. Не запуская код, определите, что выведется в консоль: console.log('a' + true); // 'atrue'
// 3. Не запуская код, определите, что выведется в консоль: console.log(Number(true)); // 1
// 4. Не запуская код, определите, что выведется в консоль: console.log(true + 1); // 2
// 5. Не запуская код, определите, что выведется в консоль: console.log(true + true)
// 6. Не запуская код, определите, что выведется в консоль: console.log(true - true)
// 7. Не запуская код, определите, что выведется в консоль: console.log(String(true) + Number(true))

console.log("a" + true); // atrue
console.log(Number(true)); // 1
console.log(true + 1); // 2
console.log(true + true); // 2
console.log(true - true); // 0
console.log(String(true) + Number(true)); // true1
console.log(("ba" + 9 * "abc").toLowerCase()); // banan

// Задание 5
// 1. Пользователь с клавиатуры вводит число, Необходимо создать условный оператор который
// a. Выводит в консоль “Число больше 5”
// b. Выводит в консоль “Число меньше 5”
// c. Выводит в консоль “Число равно 5”
// 2. Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// 3. Пользовать с клавиатуры вводит 2 числа. Необходимо найти какое из двух чисел минимальное
// 4. Пользователь с клавиатуры вводит число, Проверьте, что данная переменная больше нуля и меньше 15.

// var if/else ЛУЧШЕ если среднее количество сравнений
const num1 = 5;
if (num1 > 5) {
  console.log(`Число ${num1} больше 5`);
} else if (num1 < 5) {
  console.log(`Число ${num1} меньше 5`);
} else {
  console.log(`Число ${num1} равно 5`);
}

// var switch/case ЛУЧШЕ если большое количество сравнений
const num2 = 10;
switch (true) {
  case num2 > 15:
    console.log(`Число ${num2} больше 15`);
    break;
  case num2 < 15:
    console.log(`Число ${num2} меньше 15`);
    break;
  default:
    console.log(`Число ${num2} равно 15`);
    break;
}

// var3 тернарный оператор ЛУЧШЕ если очень малое количество сравнений
const num3 = 41;
console.log(
  num3 > 15
    ? `Число ${num3} больше 15`
    : num3 < 15
    ? `Число ${num3} меньше 15`
    : `Число ${num3} равно 15`
);

const l = "15.123455678 number";
console.log(parseInt(l)); // parseInt захватывает в строке число, приводит строку к числу и отбрасывает дробную часть
console.log(parseFloat(l)); // parseFloat захватывает в строке число, приводит строку к числу и сохраняет дробную часть

const k = 23.4567890123;
console.log(typeof k.toFixed(4)); // toFixed оставляет указанное число знаков после запятой и округляет НО ПРИВОДИТ ЧИСЛО К СТРОКЕ

console.log("\ud83d\udc99"); // 💙
