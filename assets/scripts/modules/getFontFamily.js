export const getFontFamily = (value) => {
  let fontFamily;
  switch (value) {
    case 'sans-serif':
      fontFamily = `'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif`;
      break;
    case 'serif':
      fontFamily = `'IBM Plex Serif', 'Georgia', Times, serif`;
      break;
    case 'monospace':
      fontFamily = `'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace`;
      break;
    default:
      fontFamily = `'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif`;
  }
  return fontFamily;
};
