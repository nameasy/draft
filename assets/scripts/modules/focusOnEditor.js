// import { createAndSetSelection } from './createAndSetSelection';

export const focusOnEditor = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    editorElement.focus();
    // createAndSetSelection(editorElement);
  } catch (error) {
    console.error('При установке фокуса на редактор произошла ошибка:', error);
  }
};
