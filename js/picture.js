import {simulatorPublication} from './data.js';

const PICTURE_LINK = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const PICTURE_CONTAINER = document.querySelector('.pictures');

const FRAGMENT_PICTURES = document.createDocumentFragment();

const getMiniature = function (array) {
  // eslint-disable-next-line id-length
  for (let i = 0; i < array.length; i++) {
    const miniature = PICTURE_LINK.cloneNode(true);
    miniature.querySelector('.picture__img').src =  array[i].url;
    miniature.querySelector('.picture__img').alt =  array[i].discription;
    miniature.querySelector('.picture__likes').textContent =  array[i].likes;
    miniature.querySelector('.picture__comments').textContent =  array[i].comments.length;

    FRAGMENT_PICTURES.appendChild(miniature);
  }

  PICTURE_CONTAINER.appendChild(FRAGMENT_PICTURES);

  return FRAGMENT_PICTURES;
};

getMiniature(simulatorPublication);

export {PICTURE_CONTAINER};
