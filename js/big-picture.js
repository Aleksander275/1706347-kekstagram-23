import {simulatorPublication} from './data.js';

const BIG_PICTURE = document.querySelector('.big-picture');
const BIG_PICTURE_CONTAINER = document.querySelector('.big-picture__img');
const BIG_PICTURE_IMG = BIG_PICTURE_CONTAINER.querySelector('img');
const LIKES_COUNT = document.querySelector('.likes-count');
const COMMENTS_COUNT = document.querySelector('.comments-count');
const SOCIAL_COMMENTS = document.querySelector('.social__comments');
const COMMENTS_DESC = document.querySelector('.social__caption');
const SOCIAL_COMMENT_COUNT = document.querySelector('.social__comment-count');
const COMMENTS_LOADER = document.querySelector('.comments-loader');
const BODY = document.querySelector('body');
const PICTURES = document.querySelectorAll('.picture');
const PICTURE_CLOSE = document.querySelector('.big-picture__cancel');

const getElementComments = function () {
  // eslint-disable-next-line id-length
  for (let i = 0; i < simulatorPublication.length; i++) {
    const arrayElementsComments = simulatorPublication[i].comments;
    // eslint-disable-next-line id-length
    for (let j = 0; j < arrayElementsComments.length; j++) {
      return arrayElementsComments[j];
    }
  }
};

const COMMENT = getElementComments();

const createSocialComments = function (comment) {
  const SOCIAL_COMMENT = document.createElement('li');
  SOCIAL_COMMENT.classList.add('social__comment');

  const SOCIAL_PICTURE = document.createElement('img');
  SOCIAL_PICTURE.classList.add('social__picture');

  SOCIAL_PICTURE.src = comment.avatar;
  SOCIAL_PICTURE.alt = comment.name;
  SOCIAL_PICTURE.setAttribute('width', '35');
  SOCIAL_PICTURE.setAttribute('height', '35');

  SOCIAL_COMMENT.appendChild(SOCIAL_PICTURE);

  const SOCIAL_TEXT = document.createElement('p');
  SOCIAL_TEXT.classList.add('social__text');
  SOCIAL_TEXT.textContent = comment.message;

  SOCIAL_COMMENT.appendChild(SOCIAL_TEXT);

  return SOCIAL_COMMENT;
};

const elementComment = createSocialComments(COMMENT);

const createBigPicture = function (array) {
  // eslint-disable-next-line id-length
  for (let i = 0; i < array.length; i++) {
    const ELEMENT_ARRAY = array[i];
    BIG_PICTURE_IMG.src = ELEMENT_ARRAY.url;
    LIKES_COUNT.textContent = ELEMENT_ARRAY.likes;
    COMMENTS_COUNT.textContent = ELEMENT_ARRAY.comments.lenght;
    SOCIAL_COMMENTS.appendChild(elementComment);
    COMMENTS_DESC.textContent = ELEMENT_ARRAY.description;
    return BIG_PICTURE_IMG;
  }
};

const renderingBigPicture = function () {
  BIG_PICTURE.classList.remove('hidden');

  createBigPicture(simulatorPublication);

  SOCIAL_COMMENT_COUNT.classList.add('hidden');
  COMMENTS_LOADER.classList.add('hidden');

  BODY.classList.add('modal-open');
};

const addRenderingBigPicture = renderingBigPicture();

const addClickHandler = function (picture) {
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    addRenderingBigPicture;
  });
};

// eslint-disable-next-line id-length
for (let i = 0; i < PICTURES.length; i++) {
  addClickHandler(PICTURES[i]);
}

PICTURE_CLOSE.addEventListener('click', () => {
  BIG_PICTURE.classList.add('hidden');
  BODY.classList.remove('modal-open');
});


