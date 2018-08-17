import './style.scss';
import React from 'react';

const CustomButton = ({ title, className,onClick,disabled }) => {
  let classArr = ['CustomButton', 'btn', ...className];
  return (
    <button 
      className={classArr.join(' ')} 
      onClick={onClick}
      disabled={disabled}
    >{title}</button>
  )
};

CustomButton.defaultProps = {
  title: '',
  className: [],
  disabled: false,
  onClick(){
    console.log('onClick');
  }
}

export default CustomButton;

