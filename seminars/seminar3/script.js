// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17"(только здесь данные, которые были переданы в функцию)

// var1
function greet1(firstName, lastName, age) {
  return `Привет ${firstName} ${lastName} с возрастом ${age}`;
}
console.log(greet1('Rustam', 'Ivanov', 35));

// var2
const greet2 = function (firstName, lastName, age) {
  return `Привет ${firstName} ${lastName} с возрастом ${age}`;
};
console.log(greet2('Rustam', 'Ivanov', 35));

// 2. Создайте функцию которая возводит переданное число в квадрат

// var1
function squareNumber(number) {
  return number * number; // или number ** 2
}
console.log(squareNumber(7));

// var2
const f = (a) => a * a;
console.log(`Квадрат числа 5 равен ${f(5)}`);

// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function checkNumber(value) {
  if (value < 0) {
    console.log('---');
  } else if (value > 0) {
    console.log('+++');
  } else {
    console.log('000');
  }
}
checkNumber(-5);

// Closure (Замыкание)
function firstFunction() {
  const a = 5;
  function lastFunction() {
    return a ** 2;
  }
  return lastFunction;
}
// варианты вывода
// var1
const call = firstFunction();
console.log(call()); // доп. переменная
// var2
console.log(firstFunction()()); // функция двойного вызова

// Задание 2 через замыкание
function createCheckNumberFunction() {
  return function checkNumber(value) {
    if (value < 0) {
      console.log('---');
    } else if (value > 0) {
      console.log('+++');
    } else {
      console.log('000');
    }
  };
}
// createCheckNumberFunction()(10);
const checkNumber = createCheckNumberFunction();
checkNumber(5);
checkNumber(-5);
checkNumber(0);

// 4. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
const sum = (a, b, c) => a + b + c;
console.log(sum(10, 2, -9));

// вариант задания 4 через рекурсию
function sumThreeNumbers(num1, num2, num3) {
  if (num3 === undefined) {
    return num1 + num2;
  } else {
    return sumThreeNumbers(num1 + num2, num3);
  }
}
console.log(sumThreeNumbers(5, 10, 15));

// 5. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
console.log(sum(param1, param2, param3));

// Сумма чисел от 1 до 10 через классическую рекурсию
function sumNumbers(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumNumbers(num - 1);
  }
}
console.log(sumNumbers(10));

// Произведение чисел от 1 до 10 (факториал) через классическую рекурсию
function factorialNumbers(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorialNumbers(num - 1);
  }
}
console.log(factorialNumbers(10));

// 6. Дана фукнция. Расскажите, каким будет результат каждого из вызовов функции.
function func(num = 5) {
  console.log(num * num);
}
func(2); // 4
func(3); // 9
func(); // 25

// 7. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// var1
const squareRootNumber = (number) => number ** 0.5;
console.log(squareRootNumber(3));
console.log(squareRootNumber(4));
console.log(squareRootNumber(3) + squareRootNumber(4));
// var2
const squareNumber = (num) => Math.sqrt(num);
const num1 = squareNumber(3);
const num2 = squareNumber(4);
const sumNum = num1 + num2;
console.log(sumNum);

// 8. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
const findMin = (a, b) => Math.min(a, b);
console.log(findMin(123, 321));

// 9. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// switch-case
function getDays(day) {
  switch (day) {
    case 1:
      return 'понедельник';
    case 2:
      return 'вторник';
    case 3:
      return 'среда';
    case 4:
      return 'четверг';
    case 5:
      return 'пятница';
    case 6:
      return 'суббота';
    case 7:
      return 'воскресенье';
    default:
      return 'такого дня недели не существует';
  }
}
const day = 3;
console.log(`${day}-й день недели - ${getDays(day)}`);

// 10. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
function greetingTimeDay(name) {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 8 && hour < 12) {
    return `Доброе утро, ${name}`;
  } else if (hour >= 12 && hour < 18) {
    return `Добрый день, ${name}`;
  } else if (hour >= 18 && hour < 24) {
    return `Добрый вечер, ${name}`;
  } else {
    return `Доброй ночи, ${name}`;
  }
}
console.log(greetingTimeDay('Rustam'));
