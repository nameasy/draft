import { getFromLocalStorage } from './getFromLocalStorage';
import { updateLockButton } from './updateLockButton';
import { focusOnEditor } from './focusOnEditor';
import { setAutoSave } from './setAutoSave';

const CONTENT_EDITABLE_KEY = 'is-content-editable';
const EDITOR_CONTENT_KEY = 'editor-content';

export const initializeEditor = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const isEditable = getFromLocalStorage(CONTENT_EDITABLE_KEY, 'true');
    if (isEditable === 'true') {
      editorElement.contentEditable = 'true';
    } else {
      editorElement.contentEditable = 'false';
    }
    updateLockButton(editorElement.contentEditable === 'true');
    const editorContent = getFromLocalStorage(EDITOR_CONTENT_KEY);
    if (editorContent !== null) {
      editorElement.innerHTML = editorContent;
    }
    focusOnEditor();
    setAutoSave();
  } catch (error) {
    console.error('При инициализации редактора произошла ошибка:', error);
  }
};
