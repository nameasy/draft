import { debounce } from './debounce';
import { setToLocalStorage } from './setToLocalStorage';

const STORAGE_KEY = 'editor-content';
const DEBOUNCE_DELAY = 250;

export const setAutoSave = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const debounceSave = debounce(() => {
      setToLocalStorage(STORAGE_KEY, editorElement.innerHTML);
    }, DEBOUNCE_DELAY);
    editorElement.addEventListener('input', debounceSave);
  } catch (error) {
    console.error('При автосохранении произошла ошибка:', error);
  }
};
