export const executeCommand = (commandName) => {
  try {
    document.execCommand(commandName, false, null);
  } catch (error) {
    console.error('При выполнении команды произошла ошибка:', error);
  }
};
