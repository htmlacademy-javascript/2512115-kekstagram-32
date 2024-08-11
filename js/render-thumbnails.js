import { createPictures } from './data.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const similarListElement = document.querySelector('.pictures');


const similarPicture = createPictures();

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(pictureElement);
});

similarListElement.appendChild(similarListFragment);

