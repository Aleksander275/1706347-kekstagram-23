// Функция для генерации случайного числа, взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandom (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//getRandom();

//Функция для проверки максимальной длины строки.

function checkingStringLength(stringText,maxStringLength) {
  return stringText.length <= maxStringLength;
}

//checkingStringLength();

export {getRandom, checkingStringLength};
