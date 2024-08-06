import {getRandomInteger} from './get-rand-int.js';
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};
