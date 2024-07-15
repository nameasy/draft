export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value.toString());
  } catch (error) {
    console.error(
      'При сохранении в локальном хранилище произошла ошибка:',
      error,
    );
  }
};
