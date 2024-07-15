export const updateLockButton = (isContentEditable) => {
  const buttonElement = document.querySelector('.toolbar__lock-button');
  if (!buttonElement) {
    return;
  }
  const useElement = buttonElement.querySelector('use');
  const spanElement = buttonElement.querySelector('.toolbar__lock-button-text');
  if (isContentEditable) {
    // buttonElement.classList.add('toolbar__button--is-active');
    useElement.setAttribute('href', '#unlocked');
    spanElement.textContent = 'Запретить редактирование';
  } else {
    // buttonElement.classList.remove('toolbar__button--is-active');
    useElement.setAttribute('href', '#locked');
    spanElement.textContent = 'Разрешить редактирование';
  }
};
