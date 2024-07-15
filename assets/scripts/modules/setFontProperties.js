import { getFromLocalStorage } from './getFromLocalStorage';
import { updateFontFamily } from './updateFontFamily';
import { updateFontSize } from './updateFontSize';

const FONT_FAMILY_KEY = 'font-family';
const DEFAULT_FONT_FAMILY = 'sans-serif';
const FONT_SIZE_KEY = 'font-size';
const DEFAULT_FONT_SIZE = 'medium';

export const setFontProperties = () => {
  let fontFamily = getFromLocalStorage(FONT_FAMILY_KEY, DEFAULT_FONT_FAMILY);
  let fontSize = getFromLocalStorage(FONT_SIZE_KEY, DEFAULT_FONT_SIZE);
  const fontFamilyRadioElements = [
    ...document.querySelectorAll('input[name="font-family"]'),
  ];
  const fontSizeRadioElements = [
    ...document.querySelectorAll('input[name="font-size"]'),
  ];
  updateFontFamily(fontFamily, fontFamilyRadioElements);
  updateFontSize(fontSize, fontSizeRadioElements);
  fontFamilyRadioElements.forEach((radioElement) => {
    radioElement.addEventListener('change', () => {
      if (radioElement.checked) {
        updateFontFamily(radioElement.value, fontFamilyRadioElements);
      }
    });
  });
  fontSizeRadioElements.forEach((radioElement) => {
    radioElement.addEventListener('change', () => {
      if (radioElement.checked) {
        updateFontSize(radioElement.value, fontSizeRadioElements);
      }
    });
  });
};
