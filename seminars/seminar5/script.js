// Task1 Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
};
console.log(daysOfWeek[2]); // обращение в квадратных скобках, так как ключ - число!!!

// Task2 Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры. Удалите свойство surname
const user = {
  firstname: 'Rustam',
  surname: 'Ibragimov',
  age: 56,
};
console.log(`${user.firstname} ${user.surname} - ${user.age}`);

const { firstname, surname, age } = user; // применяем деструктуризацию
console.log(`${firstname} ${surname} - ${age}`);

// user.patronymic = 'Jurisovitch';
user.patronymic = prompt('Введите отчество');
console.log(
  `${user.firstname} ${user.patronymic} ${user.surname} - ${user.age}`
);
delete user.surname;
console.log(`${user.firstname} ${user.patronymic} - ${user.age}`);

// Task3 Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами. С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const week = {};
for (let i = 0; i < arr1.length; i++) {
  week[arr1[i]] = arr2[i];
}
console.log(week);

// Task4 const obj = {x: 1, y: 2, z: 3}; Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
const task4 = { x: 1, y: 2, z: 3, q: 4, w: 5, e: 6, r: 7 };
// var1 используем цикл forin
for (const key in task4) {
  task4[key] = task4[key] ** 3;
}
console.log(task4); // { x: 1, y: 8, z: 27, q: 64, w: 125, e: 216, r: 343 }

// var2 используем метод keys and forEach
// Object.keys(task4) выделяет ключи объекта
// forEach проходит по ним и возводит значения в квадрат
Object.keys(task4).forEach((element) => {
  task4[element] = task4[element] ** 2;
});
console.log(task4); // { x: 1, y: 64, z: 729, q: 4096, w: 15625, e: 46656, r: 117649 } так как в var1 объект уже был изменен (^3)

// Task5 Найдите сумму элементов приведенного объекта.
const task5 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

// var1 через циклы
let sum1 = 0; // накопительная переменная
for (const key in task5) {
  for (const element in task5[key]) {
    sum1 += task5[key][element];
  }
}
console.log(sum1);

// var2 через values
const values = Object.values(task5); // перевод объекта в массив
console.log(values); // был объект с объектами - стал массив с объектами
// [] - задаем пустой массив,
// concat - конкатинация (присоединение), объединение массивов
// ... развертывание (spread), на вход - массив, на выходе - перечень значений элементов этого массива
// ...values.map((element) => Object.values(element)) раскрытие внутренних объектов и перевод их в массивы
// и потом на выходе получаем массив всех значений
const arrayNumber = [].concat(
  ...values.map((element) => Object.values(element))
);
console.log(arrayNumber); // массив всех значений
console.log(...arrayNumber); // пример развертывания (spread) (...)
// теперь считаем сумму всех значений с помощью reduce
const sum2 = arrayNumber.reduce(
  (accumulator, element) => accumulator + element,
  0
);
console.log(sum2);

// Task6 Создайте объект riddles (загадки). Добавьте свойства question (вопрос), answer (ответ). Cоздайте метод askQuestion (Задать вопрос) который спрашивает у пользователя вопрос question и сравнивает ответ с answer. Если ответил неверно, то в консоль выводится текст: “вы проиграли”. Cоздать 2 подсказки (hint), если пользователь ответил неверно

// var1 объект
// const question = 'Зимой и летом - одним цветом';
// const hint = ['зеленого цвета', 'это дерево'];
// const answer = 'елка';
// const riddles = {
//   question,
//   hint,
//   answer,
//   askQuestion: function () {
//     let userAnswer = prompt(this.question);
//     // toLowerCase() - приводит к нижнему регистру, trim() - удаляет пробелы по бокам, replaceAll(' ', '') - удаляет все пробелы в тексте, replace(/\s/g,'') - шаблон (регулярное выражение)
//     if (userAnswer.toLowerCase().trim() === this.answer) {
//       alert('Молодец');
//     } else {
//       for (let hint of this.hint) {
//         alert(`Подсказка: ${hint}`);
//         userAnswer = prompt(this.question);
//         if (userAnswer.toLowerCase().trim() === this.answer) {
//           alert('Молодец');
//           return;
//         }
//       }
//       alert('Вы лузер');
//     }
//   },
// };
// riddles.askQuestion(); // вызов функции

// var2 ООП
class Riddles {
  constructor(question, hint, answer) {
    this.question = question;
    this.hint = hint;
    this.answer = answer;
  }
  askQuestion() {
    let userAnswer = prompt(this.question);
    if (userAnswer.toLowerCase().trim() === this.answer) {
      alert('Молодец');
    } else {
      for (let hint of this.hint) {
        alert(`Подсказка: ${hint}`);
        userAnswer = prompt(this.question);
        if (userAnswer.toLowerCase().trim() === this.answer) {
          alert('Молодец');
          return;
        }
      }
      alert('Вы лузер');
    }
  }
}
const question = 'Зимой и летом - одним цветом';
const hint = ['зеленого цвета', 'это дерево'];
const answer = 'елка';
const riddle = new Riddles(question, hint, answer);
// console.log(riddle);
riddle.askQuestion(); // вызов функции
