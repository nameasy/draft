import { updateLockButton } from './updateLockButton';
import { setToLocalStorage } from './setToLocalStorage';
import { focusOnEditor } from './focusOnEditor';

const STORAGE_KEY = 'is-content-editable';

export const toggleEditing = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const isEditable = editorElement.contentEditable === 'true';
    if (!isEditable) {
      editorElement.contentEditable = 'true';
    } else {
      editorElement.contentEditable = 'false';
    }
    updateLockButton(!isEditable);
    setToLocalStorage(STORAGE_KEY, editorElement.contentEditable === 'true');
    if (editorElement.contentEditable === 'true') {
      focusOnEditor(editorElement);
    }
  } catch (error) {
    console.error(
      'При переключении режима редактирования произошла ошибка:',
      error,
    );
  }
};
