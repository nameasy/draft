import Typograf from 'typograf';

const tp = new Typograf({
  locale: ['ru', 'en-US'],
});

export const formatTextWithTypograf = (content) => {
  return tp.execute(content);
};
