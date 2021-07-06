import {simulatorPublication} from './data.js';

const PICTURE_LINK = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const PICTURE_CONTAINER = document.querySelector('.pictures');

const FRAGMENT_PICTURES = document.createDocumentFragment();

// eslint-disable-next-line id-length
for (let i = 0; i < simulatorPublication.length; i++) {
  const miniature = PICTURE_LINK.cloneNode(true);
  miniature.querySelector('.picture__img').src =  simulatorPublication[i].url;
  miniature.querySelector('.picture__likes').textContent =  simulatorPublication[i].likes;
  miniature.querySelector('.picture__comments').textContent =  simulatorPublication[i].comments.length;

  FRAGMENT_PICTURES.appendChild(miniature);
}

PICTURE_CONTAINER.appendChild(FRAGMENT_PICTURES);
