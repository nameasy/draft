import { getFontFamily } from './getFontFamily';
import { setToLocalStorage } from './setToLocalStorage';

const STORAGE_KEY = 'font-family';

export const updateFontFamily = (value, radioElements) => {
  const fontFamily = getFontFamily(value);
  document.documentElement.style.setProperty('--font-family', fontFamily);
  setToLocalStorage(STORAGE_KEY, value);
  radioElements.forEach((radioElement) => {
    radioElement.checked = radioElement.value === value;
  });
};
