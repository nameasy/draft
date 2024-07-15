import { highlightText } from './highlightText';
import { executeCommand } from './executeCommand';

export const initializeToolbar = () => {
  const toolbarElement = document.querySelector('.toolbar');
  if (!toolbarElement) {
    return;
  }
  const buttonElements = [
    ...toolbarElement.querySelectorAll('.toolbar__button'),
  ];
  buttonElements.forEach((buttonElement) => {
    const commandName = buttonElement.dataset.command;
    attachTooltipBehavior(buttonElement);
    if (commandName) {
      buttonElement.addEventListener('click', handleButtonClick);
    }
  });
  document.addEventListener('selectionchange', () => {
    buttonElements.forEach((buttonElement) => {
      const commandName = buttonElement.dataset.command;
      if (!commandName) {
        return;
      }
      updateButtonState(buttonElement, commandName);
    });
  });
};

const handleButtonClick = (event) => {
  const buttonElement = event.target.closest('.toolbar__button');
  if (!buttonElement) {
    return;
  }
  const commandName = buttonElement.dataset.command;
  if (!commandName) {
    return;
  }
  if (commandName === 'highlight') {
    highlightText();
  } else {
    executeCommand(commandName);
  }
  updateButtonState(buttonElement, commandName);
};

const updateButtonState = (buttonElement, commandName) => {
  const commandState = document.queryCommandState(commandName);
  if (!commandState) {
    buttonElement.classList.remove('toolbar__button--is-active');
    return;
  }
  buttonElement.classList.add('toolbar__button--is-active');
};

const attachTooltipBehavior = (buttonElement) => {
  const tooltipElement = buttonElement.nextElementSibling;
  if (
    !tooltipElement ||
    !tooltipElement.classList.contains('toolbar__tooltip')
  ) {
    return;
  }
  buttonElement.addEventListener('mouseenter', () => {
    tooltipElement.classList.add('tooltip--is-active');
  });
  buttonElement.addEventListener('mouseleave', () => {
    tooltipElement.classList.remove('tooltip--is-active');
  });
};
