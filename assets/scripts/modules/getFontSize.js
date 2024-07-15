export const getFontSize = (value) => {
  let fontSize;
  switch (value) {
    case 'small':
      fontSize = 'var(--text-sm)';
      break;
    case 'medium':
      fontSize = 'var(--text-md)';
      break;
    case 'large':
      fontSize = 'var(--text-lg)';
      break;
    default:
      fontSize = 'var(--text-md)';
  }
  return fontSize;
};
