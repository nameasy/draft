export const toggleToolbarVisibility = () => {
  try {
    const editorElement = document.querySelector('.editor');
    if (!editorElement) {
      return;
    }
    const listElement = document.querySelector('.toolbar__list');
    if (!listElement) {
      return;
    }
    const isContentEditable =
      editorElement.getAttribute('contenteditable') === 'true';
    listElement.classList.toggle(
      'toolbar__list--is-visible',
      isContentEditable,
    );
  } catch (error) {
    console.error(
      'При переключении видимости панели инструментов произошла ошибка:',
      error,
    );
  }
};
