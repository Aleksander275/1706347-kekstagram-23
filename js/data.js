import {getRandom, checkingStringLength} from './utils.js';

// создания массива из 25 сгенерированных объектов

const QUANTITY_PHOTOS_DESCRIPTIONS = 25;
const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;
const MIN_COMMENT_INDEX = 1;
const MAX_COMMENT_INDEX = 280;
const MIN_QUALITY_COMMENTS = 3;
const MAX_QUALITY_COMMENTS = 11;
const MIN_LIKES_INDEX = 15;
const MAX_LIKES_INDEX = 200;
const MIN_PHOTO_INDEX = 1;
const MAX_PHOTO_INDEX = 25;
const MIN_USERS_INDEX = 1;
const MAX_USERS_INDEX = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Валерия',
  'Гоша',
  'Люда',
  'Зорька',
  'Нинка',
  'Вася',
  'Петька',
];

// Создание случайного элемента массива.

function randomElementArray(array) {
  return array[getRandom(0, array.length - 1)];
}

// Создание нового массива комментариев с условием что длинна строки не более 140 символов.

const RESOLVE_COMMENTS = COMMENTS.filter((item) => checkingStringLength(item,140));

// Функция для генерации уникального id

const getUniqueId = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandom(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ' + ${min} + ' до ' + ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandom(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const commentUniqueId = getUniqueId(MIN_COMMENT_INDEX, MAX_COMMENT_INDEX);
const photoIdIndex = getUniqueId(MIN_USERS_INDEX, MAX_USERS_INDEX);
const getPhotoIndex = getUniqueId(MIN_PHOTO_INDEX, MAX_PHOTO_INDEX);

// Функция для генерации случайного комментатора и комментария

const commentsDescription = () => {
  const idIndex = commentUniqueId();
  const avatarIndex = getRandom(MIN_AVATAR_INDEX,MAX_AVATAR_INDEX);
  return {
    id: idIndex,
    avatar: `img/avatar-${avatarIndex}.svg`,
    message: randomElementArray(RESOLVE_COMMENTS),
    name: randomElementArray(NAMES),
  };
};

// Функция для генерации описания фотографии

const photosDescriptions = () => {
  const idIndex = photoIdIndex();
  const likesIndex = getRandom(MIN_LIKES_INDEX,MAX_LIKES_INDEX);
  const photoIndex = getPhotoIndex();
  return {
    id: idIndex,
    url: `photos/${photoIndex}.jpg`,
    discription: `случайное фото №${photoIndex}`,
    likes: likesIndex,
    comments: new Array(getRandom(MIN_QUALITY_COMMENTS, MAX_QUALITY_COMMENTS)).fill().map(() => commentsDescription()),
  };
};

// Создание массива из 25 описаний фотографий

const simulatorPublication = new Array(QUANTITY_PHOTOS_DESCRIPTIONS).fill(null).map(() => photosDescriptions());

export {simulatorPublication};
