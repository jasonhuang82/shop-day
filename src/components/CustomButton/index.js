import './style.scss';
import React from 'react';

const CustomButton = ({ title, className,onClick }) => {
  let classArr = ['CustomButton', 'btn', ...className];
  return (
    <button 
      className={classArr.join(' ')} 
      onClick={onClick}
    >{title}</button>
  )
};

CustomButton.defaultProps = {
  title: '',
  className: [],
  onClick(){
    console.log('onClick');
  }
}

export default CustomButton;

