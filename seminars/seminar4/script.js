// Task1 Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
const task1 = [1, 2, 3];
// метод for
for (let i = 0; i < task1.length; i++) {
  console.log(`Элемент ${i} - ${task1[i]}`);
}
// метод forEach
// все три аргумента не обязательно, варианты:
// (_, index, array) - на выходе индекс и массив
// (_, index) - на выходе индекс
// (_, _, array) - на выходе массив
task1.forEach((element, index, array) => {
  console.log(`Элемент ${element}, индекс ${index}, массив ${array}`);
});
task1.forEach((_, index, array) => {
  console.log(`Индекс ${index}, массив ${array}`);
});
task1.forEach((_, index) => {
  console.log(`Индекс ${index}`);
});
task1.forEach((element, _, array) => {
  console.log(`Элемент ${element}, массив ${array}`);
});

// Task2 Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
const task2 = [3, 'word', 6, true, 0, 'str', 4, false, 1, undefined];
console.log(task2.length);
console.log(task2['length']);

// Task3 Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
task3 = ['a', 'b', 'c'];
console.log(task3);
task3[0] = 1;
task3[1] = 2;
task3[2] = 3;
console.log(task3);

// Task4 Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
const task4 = [1, 2, 3];
console.log(task4);
// через for ЛУЧШЕ
for (let i = 0; i < task4.length; i++) {
  task4[i]++;
}
console.log(task4);
// через forEach ПЛОХО
task4.forEach((_, index, array) => {
  array[index]++;
});
console.log(task4);

// Task5 Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
const task5 = [1, 2, 3];
task5[8] = 10;
task5[15] = 'a';
console.log(task5);
console.log(task5.length);

// Task6 Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.
const task6 = [1, 2, 3];
console.log(task6);
task6.push(4, 5); // добавление в конец
console.log(task6);
task6.push('добавляется в конец');
console.log(task6);
task6.unshift(0); // добавление в начало
task6.unshift('добавляется в начало');
console.log(task6);

// Task7 Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
const task7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(task7);
console.log(task7.length);
task7.splice(2, 4, 'mandarin'); // удаление элементов со 2 индекса (если -1 то удаляет только последний элемент), 4 - количество удаляемых элементов и вставляет "мандарин"
console.log(task7);
console.log(task7.length);
task7.splice(2, 1, 'mango', 'apple'); // удаление 1-го элемента с индексом 2, вставка "манго" и "яблоко"
console.log(task7);
console.log(task7.length);
task7.pop(); // удаление последнего элемента
console.log(task7);
console.log(task7.length);
task7.shift(); // удаление нулевого элемента
console.log(task7);
console.log(task7.length);

// Task7dop Двумерный массив
task7dop = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
];
console.log(task7dop); // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 0 ] ]
console.log(task7dop[0]); // [ 1, 2, 3, 4, 5 ]
console.log(task7dop[1]); // [ 6, 7, 8, 9, 0 ]
console.log(task7dop[0][0]); // 1
console.log(task7dop[1][2]); // 8

// Task8 С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i = 11; i <= 33; i++) {
  console.log(i);
}

// Task9 С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// Task10 С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// Task11 Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let task11 = 1;
let task11Count = 0;
while (task11 <= 1000) {
  task11 = task11 * 3; // task11 *= 3
  task11Count++;
}
console.log('Результат: ' + task11);
console.log('Количество итераций: ' + task11Count);

// Task12 Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
task12 = [2, 5, 9, 15, 1, 4];
// через for
for (let i = 0; i < task12.length; i++) {
  if (task12[i] > 3 && task12[i] < 10) {
    console.log(task12[i]);
  }
}
// через filter
const task12Filter = task12.filter((element) => element > 3 && element < 10);
console.log(task12Filter);
// var2
console.log(task12.filter((element) => element > 3 && element < 10)); // самый лучший и короткий

// через filter и forEach
task12
  .filter((element) => element > 3 && element < 10)
  .forEach((element) => console.log(element));

// Task13 Найдите сумму четных чисел от 2 до 100.
// через for
let task13Sum = 0;
for (let i = 2; i <= 100; i += 2) {
  task13Sum += i;
}
console.log(task13Sum);

// через map and reduce
const arr = Array(50).fill(0); // задаем массив на 50 элементов и заполняем его 0
const arrTotal = arr.map((_, i) => 2 + i * 2); // задаем массив, в котором вместо 0 - четные элементы
const sum = arrTotal.reduce((accumulator, element) => accumulator + element, 0); // аккумулируем сумму элементов
console.log(sum);

// Task14 Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
const task14 = [2, 5, 9, 3, 1, 4];
let sumTask14 = 0;
for (let i = 0; i < task14.length; i++) {
  sumTask14 += task14[i];
}
console.log(sumTask14);

// Task15 С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str = '-';
for (let i = 1; i <= 9; i++) {
  str += i + '-';
}
console.log(str);
// var2 массив and join
const task15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('-' + task15.join('-') + '-');

// Task16 Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу
// for
const task16 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < task16.length; i++) {
  if (task16[i] === 0) {
    break;
  }
  console.log(task16[i]);
}

// Task17 Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
const task17 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < task17.length; i++) {
  if (task17[i] % 2 === 0 && task17[i] % 3 === 0) {
    console.log(task17[i]);
  } else {
    if (task17[i] % 2 === 0) {
      console.log(task17[i] ** 2);
    } else {
      if (task17[i] % 3 === 0) {
        console.log(task17[i] ** 3);
      } else {
        continue;
      }
    }
  }
}

// Task18 Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
const task18 = [3, 1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count_3 = 0;
for (let i = 0; i < task18.length; i++) {
  if (task18[i] === 3) {
    count_3++;
  }
}
console.log(count_3);
// filter САМЫЙ ЛУЧШИЙ
const filterTask18 = task18.filter((element) => element === 3);
console.log(filterTask18.length);

// Task19 Дан следующий массив: [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const task19 = [1, 2, 3, 4, 5];
console.log(task19);
task19.splice(1, 2);
console.log(task19);
