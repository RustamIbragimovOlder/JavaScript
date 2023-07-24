// Цикл while

// синтаксис
// while (condition) {
//     тело цикла
// }

let count = 0;
while (count < 3) {
  console.log('Hello');
  count++;
}

// вывод в консоль значения начиная с 1 до значения N которое пользователь введет с клавиатуры.
const number = Number(prompt('Введите значение N'));
let i = 1;
while (i <= number) {
  console.log(i++);
}

// Цикл do..while

// синтаксис
// do {
//     тело цикла
// } while (condition);

let pass;
let count2 = 0;
do {
  if (count2 >= 3) {
    alert('Пароль неверный!');
  }
  pass = Number(prompt('Введите пароль в числовом формате'));
  count2++;
} while (pass !== 123);

// Цикл for

// синтаксис
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

for (let i = 0; i < 3; i++) {
  console.log('Ну погоди!');
}

// вывод в консоль значения начиная с 1 до значения N которое пользователь введет с клавиатуры.
const value = Number(prompt('Введите значение N'));
for (let i = 1; i <= value; i++) {
  console.log(i);
}

let count3 = 0;
alert(`Вы нажали на кнопку ${count3} раз`);
function counterClickButtons() {
  alert(++count3);
  console.log(count3);
}

// Массив и его методы
// Просто пример
// Массивы всегда называются множественным числом, т.к. массив хранит список чего-либо.
const studentsNames = ['Ivanov', 'Petrov', 'Sidorov'];
const studentsPraticeTimes = [20, 135, 87];
// Воспользуемся циклом, чтобы сложить время практики каждого студента. Пока у нас только три студента, цикл выглядит страшнее, чем просто сложения отдельных переменных, но когда у нас будет 30 студентов, обрабатывать их в цикле будет намного проще, чем писать 30 переменных вручную и не запутаться в них. Тут же в цикле мы можем выводить информацию по каждому студенту.
let fullPracticeTime = 0;
for (let index = 0; index < studentsNames.length; index++) {
  fullPracticeTime = fullPracticeTime + studentsPraticeTimes[index];
  console.log(
    studentsNames[index],
    ' - practice time: ',
    studentsPraticeTimes[index]
  );
}
// Ivanov - practice time: 20
// Petrov - practice time: 135
// Sidorov - practice time: 87
console.log('Full practice time: ', fullPracticeTime); // Full practice time: 242

// Метод push
const students = []; // объявление массива
students.push('Иванов'); // или students.push('Иванов', 'Петров', 'Сидоров');
students.push('Петров');
students.push('Сидоров');
console.log(students); // ['Иванов', 'Петров', 'Сидоров']
console.log(students.length); // вывод длины массива - 3

// Добавление пользователем
// const user = [];
// user.push(prompt('Ваше имя?'));
// user.push(Number.prompt('Ваш возраст?'));
// console.log(user);

// Метод pop
const lastStudent = students.pop();
console.log(lastStudent); // 'Сидоров'

// Другой пример
// const filePath = 'C:/projects/bestProject/src/images/background-image.png';
// const fileName = filePath.split('/').pop(); // Разделим строку на составляющие и превратим её в массив по средствам split('/'), а потом уже вызовем новый метод pop()
// console.log(fileName); // "background-image.png"

// Другой пример
// const word = 'example';
// const arrayLetters = word.split('');
// console.log(arrayLetters);
// const upLetter = arrayLetters.pop();
// arrayLetters.push(upLetter.toLocaleUpperCase());
// console.log(arrayLetters.join('')); // обратное склеивание, но уже с большой буквой

// Метод shift
console.log(students); // ['Петров', 'Сидоров']
const firstStudent = students.shift();
console.log(firstStudent); // 'Иванов'
console.log(students); // [ 'Петров' ]

// Другой пример
const filePath = 'C:/projects/bestProject/src/images/background-image.png';
const diskName = filePath.split('/').shift(); // Разделим строку на составляющие и превратим её в массив по средствам split('/'), а потом уже вызовим новый метод shift()
console.log(diskName); // "C:"

// Метод slice
// Попробуем скопировать массив students в новую переменную.
const students2 = students;
// Добавим в новую переменную нового студента.
students2.push('Белкин');
console.log(students); // [ 'Петров', 'Белкин' ]
console.log(students2); // [ 'Петров', 'Белкин' ]

// Попробуем скопировать массив students в новую переменную.
const students3 = students.slice();
// Добавим в новую переменную нового студента.
students3.push('Машкин');
console.log(students); // [ 'Петров', 'Белкин' ]
console.log(students3); // [ 'Петров', 'Белкин', 'Машкин' ]

students3.push('Сидоров');
console.log(students3); // [ 'Петров', 'Белкин', 'Машкин', 'Сидоров' ]
const firstTwoStudents = students3.slice(0, 2);
console.log(firstTwoStudents); // [ 'Петров', 'Белкин' ]

students3.push('Иванов');
students3.push('Александров');
students3.push('Авдеев');
console.log(students3); // [ 'Петров', 'Белкин', 'Машкин', 'Сидоров', 'Иванов', 'Александров', 'Авдеев' ]
console.log(students3.slice()); // [ 'Петров', 'Белкин', 'Машкин', 'Сидоров', 'Иванов', 'Александров', 'Авдеев' ] - копия исходного массива.
console.log(students3.slice(1)); // [ 'Белкин', 'Машкин', 'Сидоров', 'Иванов', 'Александров', 'Авдеев' ] - часть исходного массива от первого элемента и до конца.
console.log(students3.slice(8)); // [] - пустой массив, т.к. Стартовый аргумент больше длины массива.
console.log(students3.slice(-2)); // [ 'Александров', 'Авдеев' ] - часть исходного массива со второго элемента с конца.
console.log(students3.slice(2, 3)); // [ 'Машкин' ] - часть исходного массива со второго элемента по третий.
console.log(students3.slice(2, -1)); // [ 'Машкин', 'Сидоров', 'Иванов', 'Александров' ] - часть исходного массива со второго элемента по предпоследний.

// Метод indexOf
// Неправильная проверка.
if (students3.indexOf('Петров')) {
  console.log('Среди студентов есть Петров!'); // Ничего не будет выведено, т.к. Петров является нулевым элементом массива, а ноль приводится к false значению, поэтому такая проверка не сработает.
}
// Правильная проверка.
if (students3.indexOf('Петров') !== -1) {
  console.log('Среди студентов есть Петров!'); // "Среди студентов есть Петров!"
}
const indexOfSidorov = students3.indexOf('Сидоров'); // 3

// Комбинирование массивов и циклов
const products = ['Кофта', 'Куртка', 'Футболка', 'Брюки'];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

function delProduct() {
  products.pop(); // удаляем последний элемент массива
  console.log('Список товаров после нажатия на кнопку');
  for (let i = 0; i < products.length; i++) {
    console.log(products[i]); // выводим обновлённый список товаров
  }
}

// Другой пример
const arr = [5, 2, 3, 7, 19, 7, 13, 3];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element >= 5) {
    console.log(element);
  } else {
    continue;
  }
}
