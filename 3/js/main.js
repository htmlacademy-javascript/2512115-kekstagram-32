// В файле main.js напишите необходимые функции для создания массива
// из 25 сгенерированных объектов. Каждый объект массива — описание фотографии,
// опубликованной пользователем.

// структура объекта
// id (число 1-25, не должны повторяться)
// url - photos/{{i}}.jpg (1-25)
// description
// likes (15-200)
// comments - массив объектов от 0 до 30
// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }


// id
// avatar - img/avatar-{{случайное число от 1 до 6}}.svg
// message
//
// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

// name - случайное имя в поле name

// пример полученного результата
//   console.log('Должны получить что-то типа:');
// let arr = [5, 'photos/3.jpg', 'описание фото', 150,
//   {
//     id: 135,
//     avatar: 'img/avatar-6.svg',
//     message: 'В целом всё неплохо. Но не всё.',
//     name: 'Артём',
//   }
// ];
//   console.log(arr);


const NAMES = [
  'Андрей',
  'Галина',
  'Дарья',
  'Иван',
  'Геннадий',
  'Юрий',
  'Василий',
  'Елена',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const commentsCount = createRandomIdFromRangeGenerator(0, 30);

let authorId = 1;

const createComment = () => ({
  id: authorId++,
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: `${getRandomArrayElement(MESSAGES) } ${ getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)});

const createObject = () => ({
  id: generateId(),
  url: `photos/${ generatePhotoId() }.jpg`,
  description: 'Очень интересное и подробное описание фотографии',
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: commentsCount()}, createComment),
});

const similarObject = Array.from({length: 25}, createObject);

// выводим результат в консоль в виде JSON, иначе не видно значений ключа comments
console.log(JSON.stringify(similarObject, null, 2));

