import {getRandom, checkingStringLength} from './utils.js';

// создания массива из 25 сгенерированных объектов

const QUANTITY_PHOTOS_DESCRIPTIONS = 25;
const MIN_AVATAR_INDEX = 1;
const MAX_AVATAR_INDEX = 6;
const MIN_COMMENT_INDEX = 1;
const MAX_COMMENT_INDEX = 100;
const MIN_LIKES_INDEX = 15;
const MAX_LIKES_INDEX = 200;
const MIN_PHOTO_INDEX = 1;
const MAX_PHOTO_INDEX = 25;
const MIN_USERS_INDEX = 1;
const MAX_USERS_INDEX = 25;
const existedIds = new Set();

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
  const UniqueId = getRandom(min, max);

  if (existedIds.has(UniqueId)) {
    return getUniqueId(min, max);
  } else {
    existedIds.add(UniqueId);
    return UniqueId;
  }
};

// Функция для генерации случайного комментатора и комментария

const commentsDescription = () => {
  const idIndex = getUniqueId(MIN_COMMENT_INDEX,MAX_COMMENT_INDEX);
  const avatarIndex = getRandom(MIN_AVATAR_INDEX,MAX_AVATAR_INDEX);
  return {
    id: idIndex,
    avatar: `img/avatar${avatarIndex}.svg`,
    message: randomElementArray(RESOLVE_COMMENTS),
    name: randomElementArray(NAMES),
  };
};

// Функция для генерации описания фотографии

const photosDescriptions = () => {
  const idIndex = getUniqueId( MIN_USERS_INDEX, MAX_USERS_INDEX);
  const likesIndex = getRandom(MIN_LIKES_INDEX,MAX_LIKES_INDEX);
  const photoIndex = getUniqueId(MIN_PHOTO_INDEX,MAX_PHOTO_INDEX);
  return {
    id: idIndex,
    url: `photos/${photoIndex}.jpg`,
    discription: `случайное фото №${photoIndex}`,
    likes: likesIndex,
    comments: commentsDescription(),
  };
};

// Создание массива из 25 описаний фотографий

const simulatorPublication = new Array(QUANTITY_PHOTOS_DESCRIPTIONS).fill(null).map(() => photosDescriptions());

export {simulatorPublication};
