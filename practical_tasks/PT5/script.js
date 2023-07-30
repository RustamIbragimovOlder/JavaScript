// Задание 1 Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

// var1 forin and push
const result = []; // накопительный массив
for (const key in numbers) {
  if (numbers[key] >= 3) {
    result.push(numbers[key]);
  }
}
console.log(`Все значения больше или равные 3 в исходном объекте - ${result}`);

// var2 values and filter
const values = Object.values(numbers);
console.log(
  `Все значения больше или равные 3 в исходном объекте - ${values.filter(
    (element) => element >= 3
  )}`
);

// Задание 2 Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
  author: 'John', // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: 'Alex',
      text: 'lorem ipsum',
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: 'Jane',
      text: 'lorem ipsum 2', // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3 Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach((element) => (element.price = element.price * 0.85));
console.log(products);

// Задание 4 Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products2. Необходимо отсортировать массив products2 используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products2 = [
  {
    id: 3,
    price: 127,
    photos: ['1.jpg', '2.jpg'],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ['3.jpg'],
  },
  {
    id: 8,
    price: 78,
  },
];

console.log(
  products2.filter(
    (element) => 'photos' in element && element.photos.length !== 0
  )
);
console.log(products2.sort((x, y) => x.price - y.price));

// Задание 5 Дано 2 массива. Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const ru = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье',
];

// var1
const dayOfWeek1 = {};
if (en.length !== ru.length) {
  console.log('Объединение невозможно. Длина массивов не равна');
} else {
  for (let i = 0; i < en.length; i++) {
    dayOfWeek1[en[i]] = ru[i];
  }
}
console.log(dayOfWeek1);

// var2
const dayOfWeek2 = Object.fromEntries(en.map((k, i) => [k, ru[i]]));
console.log(dayOfWeek2);

// var3
const dayOfWeek3 = en.reduce((acc, k, i) => ({ ...acc, [k]: ru[i] }), {});
console.log(dayOfWeek3);
