//Функция получения случайного числа.

function getRandom (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandom(-1,114);

//Функция для проверки максимальной длины строки.

function checkingStringLength(stringText,maxStringLength) {
  return stringText.length <= maxStringLength;
}

checkingStringLength('текст строки', 10);

// создания массива из 25 сгенерированных объектов

const quantityPhotosDescriptions = 25;
const minAvatarIndex = 1;
const maxAvaterIndex = 6;
const minCommentIndex = 1;
const maxCommentIndex = 100;
const minLikesIndex = 15;
const maxLikesIndex = 200;
const minPhotoIndex = 1;
const maxPhotoIndex = 25;
const minUsersIndex = 1;
const maxUsersIndex = 25;

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Валерия',
  'Гоша',
  'Люда',
  'Зорька',
  'Нинка',
  'Вася',
  'Петька',
];

function randomElementArray(array) {
  return array[getRandom(0, array.length - 1)];
}

const commentsDescription = () => {
  const idIndex = getRandom(minCommentIndex,maxCommentIndex);
  const avatarIndex = getRandom(minAvatarIndex,maxAvaterIndex);
  return {
    id: idIndex,
    avatar: `img/avatar${avatarIndex}.svg`,
    message: randomElementArray(comments),
    name: randomElementArray(names),
  };
};

commentsDescription();

const photosDescriptions = () => {
  const idIndex = getRandom(minUsersIndex,maxUsersIndex);
  const likesIndex = getRandom(minLikesIndex,maxLikesIndex);
  const photoIndex = getRandom(minPhotoIndex,maxPhotoIndex);
  return {
    id: idIndex,
    url: `photos/${photoIndex}.jpg`,
    discription: `случайное фото №${photoIndex}`,
    likes: likesIndex,
    comments: commentsDescription(),
  };
};

photosDescriptions;

const simulatorPublication = new Array(quantityPhotosDescriptions).fill(null).map(() => photosDescriptions());

simulatorPublication;
