import { initializeEditor } from './modules/initializeEditor';
import { setFontProperties } from './modules/setFontProperties';
import { initializeToolbar } from './modules/initializeToolbar';
import { toggleToolbarVisibility } from './modules/toggleToolbarVisibility';
import { toggleEditing } from './modules/toggleEditing';
import { initializeSettings } from './modules/initializeSettings';
import { clearEditor } from './modules/clearEditor';
import { insertFormattedText } from './modules/insertFormattedText';
import { handleKeyboardShortcut } from './modules/handleKeyboardShortcut';

document.addEventListener('DOMContentLoaded', () => {
  const lockButtonElement = document.querySelector('.toolbar__lock-button');
  const radioElements = [...document.querySelectorAll('.switch__control')];
  const clearButtonElement = document.querySelector('.settings__clear');
  const typografButtonElement = document.querySelector('.settings__typograf');
  initializeEditor();
  setFontProperties();
  initializeToolbar();
  toggleToolbarVisibility();
  if (lockButtonElement) {
    lockButtonElement.addEventListener('click', () => {
      toggleEditing();
      toggleToolbarVisibility();
    });
  }
  initializeSettings();
  if (clearButtonElement) {
    clearButtonElement.addEventListener('click', () => {
      clearEditor();
    });
  }
  if (typografButtonElement) {
    typografButtonElement.addEventListener('click', () => {
      insertFormattedText();
    });
  }
  radioElements.forEach((radioElement) => {
    radioElement.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const currentIndex = radioElements.indexOf(radioElement);
        const lastIndex = radioElements.length - 1;
        if (!event.shiftKey && currentIndex < lastIndex) {
          radioElements[currentIndex + 1].focus();
          event.preventDefault();
        } else if (event.shiftKey && currentIndex > 0) {
          radioElements[currentIndex - 1].focus();
          event.preventDefault();
        }
      } else if (event.key === 'Enter') {
        radioElement.click();
      }
    });
  });
});

document.addEventListener('keydown', handleKeyboardShortcut);
