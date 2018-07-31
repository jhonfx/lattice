import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';

export const JssDecorator = story => (
  <JssProvider
    generateClassName={createGenerateClassName({
      dangerouslyUseGlobalCSS: true,
      productionPrefix: 'c'
    })}
  >
    {story()}
  </JssProvider>
);

export const getSection = (html, id) => {
  const start = `<!-- start:${id} -->`;
  const end = `<!-- end:${id} -->`;
  return html.slice(html.indexOf(start), html.indexOf(end) + end.length);
};

export const concatSections = (html, sections = []) => {
  return sections.map(id => getSection(html, id)).join('');
};

export default () => {};
