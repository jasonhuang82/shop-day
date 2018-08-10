import './style.scss';
import React,{Component} from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class CustomInput extends Component {
  
  static defaultProps = {
    onChange(e) {
      console.log('onchange');

    },
    inputText: '',
    placeholder: 'username'
  }

  isOnComposition = false

  inputDom;

  isChrome = !!window.chrome && !!window.chrome.webstore;

  componentWillReceiveProps(nextProps) {
    if (nextProps.inputText !== this.props.inputText){
      this.inputDom.value = nextProps.inputText;
    }
  }

  handleComposition = (e) => {
    console.log(e.type);
    if (e.type === 'compositionend') {
      // composition is end
      this.isOnComposition = false
      if (e.target instanceof HTMLInputElement && !this.isOnComposition && this.isChrome) {
        //進行搜尋
        console.log('onChange compositionend');
        this.props.onChange(e);
      }
    } else {
      // in composition
      this.isOnComposition = true
    }
  }

  handleChange = (e) => {
    // only when onComposition===false to fire onChange
    if (e.target instanceof HTMLInputElement && !this.isOnComposition) {
      console.log('onChange');

      this.props.onChange(e);
    }
  }

  testDom;
  render() { 
    const {placeholder,inputText} = this.props;
    return (
      <div className="CustomInput">
        
        <div className="CustomInputIcon">
          <i className="fas fa-search"></i>
        </div>
        <div className="CustomInputControl">
          <input type="text"
            ref={el => this.inputDom = el}
            placeholder={placeholder}
            defaultValue={inputText}
            // value={inputText}
            onChange={this.handleChange}
            onCompositionStart={this.handleComposition}
            onCompositionUpdate={this.handleComposition}
            onCompositionEnd={this.handleComposition}
          />
        </div>
      </div>
    );
  }
}

export default CustomInput;

// <InputGroup>
//   <InputGroupAddon addonType="prepend">
//     <i className="fas fa-search"></i>
//   </InputGroupAddon>
//   <Input
//     ref={el => this.inputDom = el}
//     placeholder={placeholder}
//     defaultValue={inputText}
//     // value={inputText}
//     onChange={this.handleChange}
//     onCompositionStart={this.handleComposition}
//     onCompositionUpdate={this.handleComposition}
//     onCompositionEnd={this.handleComposition}
//   />
// </InputGroup>
// const CustomInput = ({ onChange,inputText,placeholder }) => {
//   let isOnComposition = false;
//   const inputDom ;
//   const isChrome = !!window.chrome && !!window.chrome.webstore
//   const handleComposition = (e) => {
//     console.log(e.type);
//     if (e.type === 'compositionend') {
//       // composition is end
//       isOnComposition = false
//       if (e.target instanceof HTMLInputElement && !isOnComposition && isChrome) {
//         //進行搜尋
//         console.log('onChange compositionend');
//         onChange(e);
//       }
//     } else {
//       // in composition
//       isOnComposition = true
//     }
//   }

//   const handleChange = (e) => {
//     // only when onComposition===false to fire onChange
//     if (e.target instanceof HTMLInputElement && !isOnComposition) {
//       console.log('onChange');
      
//       onChange(e);
//     }
//   }
//   return (
//     <div className="CustomInput">
//     <InputGroup>
//       <InputGroupAddon addonType="prepend">
//         <i className="fas fa-search"></i>
//         </InputGroupAddon>
//         <Input 
//           ref={el => inputDom = el}
//           placeholder={placeholder}
//           defaultValue={inputText}
//           // value={inputText}
//           onChange={handleChange}
//           onCompositionStart={handleComposition}
//           onCompositionUpdate={handleComposition}
//           onCompositionEnd={handleComposition}
//         />
//       </InputGroup>
//     </div>
//   );
// };
// CustomInput.defaultProps = {
//   onChange(e){
//     console.log('onchange');
    
//   },
//   inputText: '',
//   placeholder: 'username'
// }



// export default CustomInput;