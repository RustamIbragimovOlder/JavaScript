// Example 1
// Данные об успеваемости трёх студентов.
// const ivanov = 4.5;
// const petrov = 3.7;
// const sidorov = 3.2;
// Расчет стипендии.
// let scholarshipIvanov = 0;
// if (ivanov > 3.4 && ivanov < 4) {
//   scholarshipIvanov = 5000;
// } else if (ivanov > 4) {
//   scholarshipIvanov = 7500;
// }
// let scholarshipPetrov = 0;
// if (petrov > 3.4 && petrov < 4) {
//   scholarshipPetrov = 5000;
// } else if (petrov > 4) {
//   scholarshipPetrov = 7500;
// }
// let scholarshipSidarov = 0;
// if (sidorov > 3.4 && sidorov < 4) {
//   scholarshipSidarov = 5000;
// } else if (sidorov > 4) {
//   scholarshipSidarov = 7500;
// }
// console.log(scholarshipIvanov); // 7500
// console.log(scholarshipPetrov); // 5000
// console.log(scholarshipSidarov); // 0

// Функция для расчета стипендии.
function getScholarship(academicPerformance) {
  if (academicPerformance < 3.4) {
    return 0;
  }
  if (academicPerformance < 4) {
    return 5000;
  } else {
    return 7500;
  }
}
// Данные об успеваемости трёх студентов.
const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;
// Расчет стипендии.
let scholarshipIvanov = getScholarship(ivanov);
let scholarshipPetrov = getScholarship(petrov);
let scholarshipSidarov = getScholarship(sidorov);
console.log(scholarshipIvanov); // 7500
console.log(scholarshipPetrov); // 5000
console.log(scholarshipSidarov); // 0

// Виды функций

// Декларативный подход к объявлению функций. Мы объявляем ключевое слово function, за которым идёт имя функции (его может и не быть) и её тело.
// Именованная функция.
// function getMaximum(numbers) {
//   // Реализация алгоритма поиска максимального значения.
// }

// Анонимная функция. В данном случае эта функция будет бесполезной, так как без имени мы не сможем её вызвать. Анонимные функции встречаются в местах, где они передаются в качестве функции обратного вызова или возвращаются из другой функции.
// function (result) {
// // Какой-то код обработки результата.
// }

// Функциональное выражение.
// const getMaximum = function (numbers) {
//   // Реализация алгоритма поиска максимального значения.
// };

// или в стиле ES6 с использованием толстой стрелки (fat arrow)
const getMaximum = (numbers) => {
  // Реализация алгоритма поиска максимального значения.
};

// Example 2 Функция, возвращающая среднее арифметическое двух чисел
function average(x, y) {
  return (x + y) / 2;
}
avg = average(42, 100500);
alert(avg);

// Область видимости
function changeX(x) {
  x += 5;
  alert(x);
}
var x = 1;
alert(x); // выводит 1
changeX(x); // выводит 6
alert(x); // выводит 1

// Example 3
function helloName(name) {
  console.log(name);
}
helloName("Rustam");

// Example 4
let count = 5;
function counter() {
  return count++;
}
console.log(count); // 5
counter();
console.log(count); // 6
counter();
console.log(count); // 7
counter();
console.log(count); // 8

// Example 5
let age = Number(prompt("Сколько Вам лет?"));
const levelUpAge = () => age + 5;
console.log(`Через 5 лет Вам будет ${levelUpAge()} лет`);

// Example 6
function hello() {
  console.log("Hello function");
}
hello();

const sum = (param1, param2) => param1 + param2;
console.log(sum(12, 33));

const salary = (money) => {
  money = money * 0.87;
  return money * 0.75;
};
const userMoney = Number(prompt("Сколько Вы зарабатываете?"));
console.log(`Для расходов ${salary(userMoney)}`);

// Браузерные события
function buy() {
  alert("Поздравляем!");
  alert("Вы нажали на кнопку купить");
}

// Реализации игры Загадки
function goRiddle() {
  function riddles(question, answer) {
    // где первый параметр это загадка, а второй - ответ не нее
    let userAnswer = prompt(question); // внутри prompt передаём вопрос
    if (userAnswer.toLowerCase() === answer) {
      // внутри условия if вместо answer будет ответ на загадку
      alert("Молодец, ответил верно");
    } else {
      alert("Не угадал");
    }
  }
  riddles("Не лает, не кусает, а в дом не пускает", "замок");
  riddles("Зимой и летом одним цветом", "елка");
  riddles("Сто одёжек и все без застежек", "капуста");
}
