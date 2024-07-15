import { executeCommand } from './executeCommand';
import { highlightText } from './highlightText';
import { focusOnEditor } from './focusOnEditor';

export const handleKeyboardShortcut = (event) => {
  // Проверяем, нажата ли клавиша Ctrl в Windows/Linux или клавиша Command на Mac
  const isCtrlPressed = event.ctrlKey || event.metaKey;
  // Проверяем, нажата ли клавиша Shift
  const isShiftPressed = event.shiftKey;
  // Определяем, какая клавиша была нажата
  switch (event.key.toLowerCase()) {
    case 'b':
      if (isCtrlPressed) {
        executeCommand('bold');
        event.preventDefault(); // Предотвращаем стандартное поведение браузера
      }
      break;
    case 'i':
      if (isCtrlPressed) {
        executeCommand('italic');
        event.preventDefault();
      }
      break;
    case 'u':
      if (isCtrlPressed) {
        executeCommand('underline');
        event.preventDefault();
      }
      break;
    case 'h':
      if (isCtrlPressed) {
        highlightText();
        event.preventDefault();
      }
      break;
    case 's':
      if (isCtrlPressed && isShiftPressed) {
        executeCommand('strikethrough');
        event.preventDefault();
      }
      break;
    case '\\':
      if (isCtrlPressed) {
        focusOnEditor();
        event.preventDefault();
      }
      break;
    default:
      break;
  }
};
