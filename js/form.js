import {isEscEvent} from './utils.js';

const uploadField = document.querySelector('#upload-file');
const formPopap = document.querySelector('.img-upload__overlay');
const buttonClose = document.querySelector('#upload-cancel');

const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const onInputFocused = (evt) => evt.stopPropagation();

// open popap

uploadField.addEventListener('change', () => {
  formPopap.classList.remove('hidden');
  document.body.classList.add('modal-open');
  textHashtags.addEventListener('keydown', onInputFocused);
});

// validation text

textDescription.addEventListener('input', () => {
  const valueLength = textDescription.value.length;
  if (valueLength < 2) {
    textDescription.setCustomValidity(`Ещё ${2 - valueLength} символов.`);
  } else if (valueLength > 140) {
    textDescription.setCustomValidity(`Удалите ${valueLength - 140} символов.`);
  } else {
    textDescription.setCustomValidity('');
  }

  textDescription.reportValidity();
});

// validation hashtag

const correctHashtags = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

const validationHashtag = function () {
  const valueTextHashtags = textHashtags.value;
  const arrayValue = valueTextHashtags.split(' ');

  // eslint-disable-next-line id-length
  for (let i = 0; i < arrayValue.length; i++) {
    if (correctHashtags.test(arrayValue[i])) {
      textHashtags.setCustomValidity('');
    } else {
      textHashtags.setCustomValidity(`Не верный символ ${arrayValue[i]}`);
    }
  }

  textHashtags.reportValidity();
};

textHashtags.addEventListener('input', () => {
  validationHashtag();
});

// reset Form

const resetFormValues = () => {
  textHashtags.value = '';
  textDescription.value = '';
};

// close popap

const closePopup = function () {
  formPopap.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetFormValues();
};

buttonClose.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closePopup();
  }
});
