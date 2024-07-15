import { formatTextWithTypograf } from './formatTextWithTypograf';
import { setToLocalStorage } from './setToLocalStorage';

const STORAGE_KEY = 'editor-content';

export const insertFormattedText = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const currentContent = editorElement.innerHTML;
    const formattedContent = formatTextWithTypograf(currentContent);
    editorElement.innerHTML = formattedContent;
    setToLocalStorage(STORAGE_KEY, formattedContent);
    const buttonElement = document.querySelector('.settings__typograf');
    if (!buttonElement) {
      return;
    }
    buttonElement.textContent = 'Готово';
    setTimeout(() => {
      buttonElement.textContent = 'Оттипографить';
    }, 2000);
  } catch (error) {
    console.error(
      'При вставке форматированного текста произошла ошибка:',
      error,
    );
  }
};
