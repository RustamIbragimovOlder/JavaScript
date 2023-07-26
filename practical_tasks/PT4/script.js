// Задание 1 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const arrayTask1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayTask1.length; i++) {
  if (arrayTask1[i] === 0) {
    console.log(`${arrayTask1[i]} - это ноль`);
  } else {
    if (arrayTask1[i] % 2 !== 0) {
      console.log(`${arrayTask1[i]} - нечетное число`);
    } else {
      console.log(`${arrayTask1[i]} - четное число`);
    }
  }
}

// Задание 2 Дан массив [1, 2, 3, 4, 5, 6, 7] Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayTask2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayTask2); // для наглядности
arrayTask2.splice(3, 2);
console.log(arrayTask2);

// Задание 3 Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов. Рассчитать сумму элементов этого массива. Найти минимальное число. Найти есть ли в этом массиве число 3.

const arrayTask3 = [];
for (let i = 0; i < 5; i++) {
  arrayTask3[i] = Math.floor(Math.random() * 10);
}
console.log(arrayTask3);
let sumTask3 = 0;
for (let i = 0; i < arrayTask3.length; i++) {
  sumTask3 += arrayTask3[i];
}
console.log(`Сумма значений элементов массива = ${sumTask3}`);
console.log(
  `Минимальное число в массиве = ${Math.min.apply(null, arrayTask3)}`
);
const filterTask3 = arrayTask3.filter((element) => element === 3);
if (filterTask3.length > 0) {
  console.log(`В этом массиве число 3 есть`);
} else {
  console.log(`В этом массиве числа 3 нет`);
}

// *Необязательное задание. Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

const symbol = 'x';
let newSymbol = symbol;
for (let i = 0; i < 20; i++) {
  console.log(newSymbol);
  newSymbol = newSymbol + symbol;
}
