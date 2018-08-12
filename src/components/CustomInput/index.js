import './style.scss';
import React,{Component} from 'react';

class CustomInput extends Component {
  static defaultProps = {
    onChange(e) {
      console.log("onchange");
    },
    inputText: "",
    placeholder: "username"
  };

  isOnComposition = false;

  inputDom;

  isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  isChrome = !!window.chrome && !!window.chrome.webstore;
  isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  componentWillReceiveProps(nextProps) {
    if (nextProps.inputText !== this.props.inputText) {
      this.inputDom.value = nextProps.inputText;
    }
  }

  handleComposition = e => {
    // console.log(e.type);
    if (e.type === "compositionend") {
      // composition is end
      this.isOnComposition = false;
      if (
        e.target instanceof HTMLInputElement &&
        !this.isOnComposition
      ) {
        //進行搜尋
        // console.log("onChange compositionend");
        this.props.onChange(e);
      }
    } else {
      // in composition
      this.isOnComposition = true;
    }
  };

  handleChange = e => {
    // only when onComposition===false to fire onChange
    if (e.target instanceof HTMLInputElement && !this.isOnComposition) {
      // console.log("onChange");
      this.props.onChange(e);
    }
  };

  testDom;
  render() {
    const { placeholder, inputText } = this.props;
    return (
      <div className="CustomInput">
        <div className="CustomInputIcon">
          <i className="fas fa-search" />
        </div>
        <div className="CustomInputControl">
          <input
            type="text"
            ref={el => (this.inputDom = el)}
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