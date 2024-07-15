export const getFromLocalStorage = (key, defaultValue = '') => {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null && storedValue !== undefined) {
      return storedValue;
    }
    return defaultValue;
  } catch (error) {
    console.error(
      'При извлечении из локального хранилища произошла ошибка:',
      error,
    );
    return defaultValue;
  }
};
