import {getRandomInteger} from './get-rand-int.js';
import {getRandomArrayElement} from './get-rand-arr-el.js';
import {getUniqRandomIntFromRange} from './get-uniq-rand-int-from-range.js';

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

const DESCRIPTIONS = [
  'Вот как-то так',
  'Просто фото',
  'Прогулочка и фоточки',
  'Такую красоту сфотал',
  'Без фильтров',
  'Без комментариев',
];

let authorId = 1;

const createComment = () => ({
  id: authorId++,
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: `${getRandomArrayElement(MESSAGES) } ${ getRandomArrayElement(MESSAGES)}`,
  name: getRandomArrayElement(NAMES)});

const createPicture = () => ({
  id: getUniqRandomIntFromRange(1, 25)(),
  url: `photos/${ getUniqRandomIntFromRange(1, 25)() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const createPictures = () => Array.from({length: 25}, createPicture);
// выводим результат в консоль в виде JSON, иначе не видно значений ключа comments
// console.log(JSON.stringify(similarObject, null, 2));
//console.log(similarObject);

export {createPictures};
