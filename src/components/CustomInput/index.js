import './style.scss';
import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
const CustomInput = ({ onChange }) => (
  <div className="CustomInput">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <i className="fas fa-search"></i>
      </InputGroupAddon>
      <Input 
        placeholder="username"
        onChange={onChange}
      />
    </InputGroup>
  </div>
);
CustomInput.defaultProps = {
  onChange(e){
    console.log('onchange');
    
  }
}



export default CustomInput;