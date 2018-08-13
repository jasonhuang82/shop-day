import './style.scss';
import React from 'react';

const TextTitle = ({title}) => (
  <div className="TextTitle">{title}</div>
);

TextTitle.defaultProps = {
  title: '標題文字'
};
export default TextTitle;