// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.


let temperatureCelsius = 28;
console.log(`Температура по Цельсию ${temperatureCelsius} град.`);
let temperatureFahrenheit = 9 / 5 * temperatureCelsius + 32;
console.log(`Температура по Фаренгейту ${temperatureFahrenheit} град.`)

const firstName = 'Rustam';
let admin = firstName;
console.log(admin);