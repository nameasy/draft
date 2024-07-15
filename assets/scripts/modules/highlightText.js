export const highlightText = () => {
  try {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    if (!selectedText) {
      return;
    }
    const isHighlighted =
      document.queryCommandValue('backColor') === 'rgb(254, 243, 199)';
    if (isHighlighted) {
      document.execCommand('removeFormat', false, 'backgroundColor');
    } else {
      document.execCommand('hiliteColor', false, 'rgb(254, 243, 199)');
    }
  } catch (error) {
    console.error('При выделении текста произошла ошибка:', error);
  }
};
