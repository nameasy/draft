export const debounce = (callback, delay) => {
  let timeoutId;
  return (event) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(event);
    }, delay);
  };
};
