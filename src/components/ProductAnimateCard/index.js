import './style.scss';
import React,{Component} from 'react';
import cx from 'classnames';


export default class ProductAnimateCard extends Component {
  static defalutProps = {
    imgUrl: 'https://fakeimg.pl/250x100/'
  }
  state = {

  }
  render() { 
    return (
      <div 
        className="ProductAnimateCard"
        style={{ backgroundImage: `url('${this.props.imgUrl}')`}}
      ></div>
  );
  }
}
