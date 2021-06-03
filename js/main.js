//Функция получения случайного числа.

function getRandom(min, max) {
  if (min !== Number(min) || max !== Number(max)) {
    throw new Error('Неверный тип переменной');
  }
  if (min < 0 || max < 0 || min >= max) {
    throw new Error('Неверно задан диапазон');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandom(-1,114);

//Функция для проверки максимальной длины строки.

function checkingStringLength(stringText,maxStringLength) {
  return stringText.length <= maxStringLength;
}

checkingStringLength('текст строки', 10);

