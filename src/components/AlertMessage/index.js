import './style.scss';
import React from 'react';

const AlertMessage = ({className,iconClass, text}) => {
  let classNamesArr = ['AlertMessage', ...className];
  let iconClassArr = ['AlertMessageIcon', ...iconClass];

  return (
    <div className={classNamesArr.join(' ')}>
      <div className="AlertMessageTitle">{text}</div>
      <div className="AlertMessageIcon">
        <i className={iconClassArr.join(' ')}></i>
      </div>
    </div>
  )
};

AlertMessage.defaultProps = {
  text: '提示文字',
  iconClass: ['far','fa-angry'],
  className: ['']
};

export default AlertMessage;