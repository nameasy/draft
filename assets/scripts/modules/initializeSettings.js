export const initializeSettings = () => {
  const settingsElement = document.querySelector('.settings');
  if (!settingsElement) {
    return;
  }
  const triggerElement = settingsElement.querySelector('.settings__trigger');
  if (!triggerElement) {
    return;
  }
  triggerElement.addEventListener('click', (event) => {
    settingsElement.classList.toggle('settings--is-visible');
    event.stopPropagation(); // Прекращаем дальнейшую передачу текущего события
  });
  // Закрываем настройки при нажатии вне области
  document.addEventListener('click', (event) => {
    const isClickedInsideSettings = settingsElement
      .querySelector('.settings__inner')
      .contains(event.target);
    const isClickedInsideTrigger = triggerElement.contains(event.target);
    if (!isClickedInsideSettings && !isClickedInsideTrigger) {
      settingsElement.classList.remove('settings--is-visible');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      settingsElement.classList.remove('settings--is-visible');
    }
  });
};
