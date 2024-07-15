import { setToLocalStorage } from './setToLocalStorage';

const STORAGE_KEY = 'editor-content';

export const clearEditor = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const confirmed = confirm('Очистить содержимое редактора?');
    if (!confirmed) {
      return;
    }
    editorElement.innerHTML = '';
    setToLocalStorage(STORAGE_KEY, '');
  } catch (error) {
    console.error('При очистке содержимого редактора произошла ошибка:', error);
  }
};
