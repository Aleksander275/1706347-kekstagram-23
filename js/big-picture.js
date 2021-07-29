import {isEscEvent} from './utils.js';

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
const PICTURE_CLOSE = document.querySelector('.big-picture__cancel');

let commentsNumber = 5;

const createBigPicture = function (picture) {
  BIG_PICTURE.classList.remove('hidden');
  BODY.classList.add('modal-open');

  BIG_PICTURE_IMG.src = picture.url;
  LIKES_COUNT.textContent = picture.likes;
  COMMENTS_COUNT.textContent = picture.comments.length;
  SOCIAL_COMMENTS.innerHTML = '';

  const createSocialComments = function () {
    // eslint-disable-next-line id-length
    for (let i = 0; i < picture.comments.length; i++) {
      const SOCIAL_COMMENT = document.createElement('li');
      SOCIAL_COMMENT.classList.add('social__comment');

      const SOCIAL_PICTURE = document.createElement('img');
      SOCIAL_PICTURE.classList.add('social__picture');

      SOCIAL_PICTURE.src = picture.comments[i].avatar;
      SOCIAL_PICTURE.alt = picture.comments[i].name;
      SOCIAL_PICTURE.setAttribute('width', '35');
      SOCIAL_PICTURE.setAttribute('height', '35');

      SOCIAL_COMMENT.appendChild(SOCIAL_PICTURE);

      const SOCIAL_TEXT = document.createElement('p');
      SOCIAL_TEXT.classList.add('social__text');
      SOCIAL_TEXT.textContent = picture.comments[i].message;

      SOCIAL_COMMENT.appendChild(SOCIAL_TEXT);

      SOCIAL_COMMENTS.appendChild(SOCIAL_COMMENT);
      SOCIAL_COMMENT.classList.add('hidden');
    }
  };

  const renderComments = function () {
    const arrayComment = Array.from(SOCIAL_COMMENTS.children);
    let commentsCouter = 0;

    arrayComment.forEach((element) => {
      if (element.classList.contains('hidden')) {
        commentsCouter++;
      }
    });

    if (commentsCouter < 5) {
      SOCIAL_COMMENT_COUNT.innerHTML = `${picture.comments.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
      for (let counter = arrayComment.length - 1; counter >= 0 ; counter--) {
        arrayComment[counter].classList.remove('hidden');
      }
      COMMENTS_LOADER.classList.add('hidden');
    } else {
      COMMENTS_LOADER.classList.remove('hidden');
      SOCIAL_COMMENT_COUNT.innerHTML = `${commentsNumber} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
      for (let counter = 0; counter <= commentsNumber - 1 ; counter++) {
        if (arrayComment.length <= commentsNumber) {
          COMMENTS_LOADER.classList.add('hidden');
          SOCIAL_COMMENT_COUNT.innerHTML = `${picture.comments.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
        }
        arrayComment[counter].classList.remove('hidden');
      }
    }
  };

  const commentsLoaderClick = () => {
    commentsNumber += 5;
    renderComments();
  };

  const closeBigPicture = function (evt) {
    const closeBigPicturePopup = () => {
      evt.preventDefault();
      document.body.classList.remove('modal-open');
      BIG_PICTURE.classList.add('hidden');
      BIG_PICTURE_IMG.setAttribute('src', '');
      LIKES_COUNT.textContent = '';
      COMMENTS_COUNT.textContent = '';
      PICTURE_CLOSE.removeEventListener('click', closeBigPicture);
      commentsNumber = 5;

      COMMENTS_LOADER.removeEventListener('click', commentsLoaderClick);
    };

    if (evt.type === 'click') {
      closeBigPicturePopup();
    } else if (isEscEvent(evt)) {
      closeBigPicturePopup();
    }
  };

  createSocialComments();
  renderComments();

  COMMENTS_LOADER.addEventListener('click', commentsLoaderClick);

  COMMENTS_DESC.textContent = picture.discription;

  PICTURE_CLOSE.addEventListener('click', (evt) => {
    closeBigPicture(evt);
  });

  document.addEventListener('keydown', (evt) => {
    closeBigPicture(evt);
  });
};

export {createBigPicture};


