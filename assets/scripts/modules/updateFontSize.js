import { getFontSize } from './getFontSize';
import { setToLocalStorage } from './setToLocalStorage';

const STORAGE_KEY = 'font-size';

export const updateFontSize = (value, radioElements) => {
  const fontSize = getFontSize(value);
  document.documentElement.style.setProperty('--font-size', fontSize);
  setToLocalStorage(STORAGE_KEY, value);
  radioElements.forEach((radioElement) => {
    radioElement.checked = radioElement.value === value;
  });
};
