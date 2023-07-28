// Example1
const product = {
  name: 'стол',
  price: 2000,
};
console.log(product);
const productNew = {
  productImg: 'photo.png',
  productText: 'хорошее кресло',
};
console.log(productNew);

// Добавление свойства
productNew.link = 'product/linkname.html';
console.log(productNew);

// Удаление свойства
delete productNew.productText;
console.log(productNew);

// Изменение значения свойства
productNew.link = 'catalog/linkname.html';
console.log(productNew);

// Хранение объектов
const car = {
  make: 'Audi',
  model: 'A5',
  year: 2023,
  color: 'red',
  passengers: 2,
  power: 249,
};
console.log(car);
console.log(car.odometer);

function haveRoadTrip(myСar, distance) {
  myСar.odometer += distance;
}
haveRoadTrip(car, 200);
console.log(car.odometer);
console.log(car);

// Метод объекта
const car1 = {
  make: 'Audi',
  model: 'A5',
  year: 2023,
  color: 'red',
  passengers: 2,
  power: 249,
  odometer: 0,
  engineIsStarted: false, // состояние двигателя true или false
  startEngine: function () {
    // метод проверки запущен двигатель или нет
    this.engineIsStarted = true;
  },
  stopEngine: function () {
    // метод проверки заглушен двигатель или нет
    this.engineIsStarted = false;
  },
  haveRoadTrip: function (distance) {
    if (this.engineIsStarted) {
      this.odometer += distance;
    } else {
      // alert('Сначала запустите двигатель!');
      console.log('Сначала запустите двигатель!');
    }
  },
};
car1.haveRoadTrip(200);
console.log(car1.odometer);

// Перебор значений
const car2 = {
  make: 'Audi',
  model: 'A5',
  year: 2023,
  color: 'red',
  passengers: 2,
  power: 249,
  odometer: 0,
};
console.log('Все ключи объекта car2');
for (const key in car2) {
  console.log(key);
}
console.log('Все значения объекта car2');
for (const key in car2) {
  console.log(car2[key]);
}

for (const key in car2) {
  console.log(key + ': ' + car2[key]);
}

// Преобразование объекта в массив
// НЕПРАВИЛЬНЫЙ ВАРИАНТ
const object = {
  1: 'Ivanov',
  2: 'Petrov',
};
const students = object.map((student) => `student: ${student}`); // VM223:6 Uncaught TypeError: object.map is not a function

// ПРАВИЛЬНЫЙ ВАРИАНТ Object.keys
const group1 = {
  Ivanov: {
    practicePlace: 'ldu-1',
    practiceTime: 56,
  },
  Petrov: {
    practicePlace: 'kamaz',
    practiceTime: 120,
  },
  Sidorov: {
    practicePlace: 'ldu-1',
    practiceTime: 148,
  },
  Belkin: {
    practicePlace: 'GosDZU',
    practiceTime: 20,
  },
  Avdeev: {
    practicePlace: 'LPK',
    practiceTime: 160,
  },
};
const group1Students = Object.keys(group1);
console.log(group1Students); // ["Ivanov", "Petrov", "Sidorov", "Belkin", "Avdeev"]
console.log(Object.keys(group1));

// ПРАВИЛЬНЫЙ ВАРИАНТ Object.values
console.log(Object.values(group1));

// ПРАВИЛЬНЫЙ ВАРИАНТ Object.entries
console.log(Object.entries(group1));

// Метод map
const studentsPracticeTime = [
  {
    firstName: 'Ivanov',
    practiceTime: 56,
  },
  {
    firstName: 'Petrov',
    practiceTime: 120,
  },
  {
    firstName: 'Sidorov',
    practiceTime: 148,
  },
  {
    firstName: 'Belkin',
    practiceTime: 20,
  },
  {
    firstName: 'Avdeev',
    practiceTime: 160,
  },
];
// Мы хотим вывести в таблицу студентов и информацию для каждого, прошел ли он практику уже. Практика будет считаться пройденной, если студент отработал 120 часов или больше.
const dataForTable = studentsPracticeTime.map((student) => {
  if (student.practiceTime < 120) {
    return {
      // Мы возвращаем новый объект, более удобный для вывода.
      Student: student.firstName,
      Practice: 'Not passed',
    };
  } else {
    return {
      Student: student.firstName,
      Practice: 'Passed',
    };
  }
});
console.table(dataForTable); // В консоль можно выводить разными способами, если использовать метод table, и передать туда массив или объект, этот метод выводит данные в виде таблицы.

// Метод filter
const studentsPassedPractice = studentsPracticeTime.filter((student) => {
  if (student.practiceTime < 120) return false;
  return true;
});
console.log(studentsPassedPractice); // Получили новый массив, в котором   только те студенты, кто уже прошел практику.
console.table(studentsPassedPractice);

// Метод reduce

// var1 без reduce
// Посчитаем сколько всего часов практики отработали студенты.
let totalTime = 0; // Объявим переменную для хранения суммы всех часов.
for (let index = 0; index < studentsPracticeTime.length; index++) {
  totalTime = totalTime + studentsPracticeTime[index].practiceTime;
}
console.log(totalTime); // 504

// var2 через reduce
// Посчитаем сколько всего часов практики отработали студенты.
const totalTime2 = studentsPracticeTime.reduce((acc, student) => {
  //   Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (acc) при каждой итерации, и текущий элемент массива (student).
  return acc + student.practiceTime;
}, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.
console.log(totalTime2); // 504

// Метод some
// Проверим, есть ли хоть один студент, который прошел практику.
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
  console.log(student.firstName); // Добавим вывод студента, чтобы  посмотреть сколько элементов массива будет проитерированно.
  return student.practiceTime >= 120;
});
// "Ivanov"
// "Petrov" - итерации остановились на втором элементе массива, т.к. он удовлетворяет нашему условию и метод some дальше итерации не выполняет.
console.log(isSomebodyPassedPractice); // true - среди студентов есть те, кто прошел практику.

// Метод find
// Мы хотим найти студента Belkin и посмотреть сколько времени он отработал на практике.
const studentBelkin = studentsPracticeTime.find((student) => {
  return student.firstName === 'Belkin';
});
console.log(studentBelkin.practiceTime); // 20

// Деструктуризация
// Сбор данных из объекта по-старому.
// const student = {
//   firstName: 'Ivan',
//   lastName: 'Petrov',
//   age: 21,
// };
// const firstName = student.firstName; // мы объявляем отдельно переменную, под каждый нужный нам параметр.
// const lastName = student.lastName;
// const age = student.age;

// // Сбор данных из массива.
// const studentsNew = ['Ivanov', 'Petrov', 'Belkin'];
// const student1 = studentsNew[0];
// const student2 = studentsNew[1];
// const student3 = studentsNew[2];

// Сбор данных из объекта по-новому.
// Сбор данных из объекта.
const student = {
  firstName: 'Ivan',
  lastName: 'Petrov',
  age: 21,
};
const { firstName, lastName, age } = student; // Деструктуризация - мы объявляем все переменные в фигурных скобках, название должно совпадать с нужным нам параметром.
// Сбор данных из массива.
const studentsNew = ['Ivanov', 'Petrov', 'Belkin'];
const [student1, student2, student3] = studentsNew; // Деструктуризация - Тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны элементы массива.

// Сбор данных из объекта.
// Деструктурируем значение ключа firstName в переменную studentName. И зададим для возраста значение по умолчанию, равное 20.
// const { firstName: studentName, lastName, age = 20 } = student;
// Сбор данных из массива.
// const students = ['Ivanov', 'Petrov', 'Belkin'];
// const [student1, student2, student3] = students; // Тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны   элементы массива.
