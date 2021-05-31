//Функция получения случайного числа.

function getRandom(max) {
  if (max > 0) {
    return Math.floor(Math.random() * max);
  }
}

getRandom();

//Функция для проверки максимальной длины строки.

const string = '';

const maxStringLength = 140;

const stringLength = string.length;

function checkingStringLength() {
  if(stringLength < maxStringLength) {
    return true;
  }

  return false;
}

checkingStringLength(stringLength,maxStringLength);
