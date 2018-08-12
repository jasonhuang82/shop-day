import './style.scss';
import React,{Component} from 'react';
import cx from 'classnames';
import { getImgAbsUrl } from "../../config/reUseMethod";
import CustomButton from "../../components/CustomButton";

export default class ShopCartList extends Component {
  static defalutProps = {
    cartData: [],
    onProductDelete(){
      console.log('onProductDelete');
    }
  }
  state = {
    touchIndex: -1
  }

  showDelBtn = touchIndex => {
    this.setState({ touchIndex })
  }
  render() { 
    return (
      <ul className="ShopCartList">
          {this.props.cartData.map((cartProduct,productIndex) => (
            <li 
              className={cx('ShopCartListItem',{
                ShopCartListShowDelBtn: productIndex === this.state.touchIndex
              })}
              key={cartProduct.pid + productIndex}
              onTouchStart={e => this.showDelBtn(productIndex)}
              onTouchEnd={e => this.showDelBtn(-1)}
            >
              <div 
                className="ShopCartListImg"
                style={{ backgroundImage: `url('${getImgAbsUrl(cartProduct.coverName)}')`}}
              ></div>
              <div className="ShopCartListdesc">
                <h3 className="ShopCartListTitle">{cartProduct.title}</h3>
                <div className="ShopCartListPriceArea">
                  <div
                    className={cx('ShopCartListPrice',{
                      ShopCartListPriceLineThrough: cartProduct.discount < 1
                    })}
                  >售價 : NT${cartProduct.price}</div>
                  <div 
                    className="ShopCartListPrice ShopCartListPriceRed ShopCartListPriceDiscount"
                    hidden={cartProduct.discount === 1}
                  >
                    <div>打折後 : NT${Math.ceil(cartProduct.price * cartProduct.discount)}</div>
                    <div>{Math.floor(cartProduct.discount * 10)} 折</div>
                  </div>
                </div>
              </div>
              <CustomButton
                title="刪除"
                className={['ShopCartListDel','btn-danger']}
                onClick={e => this.props.onProductDelete(productIndex)}
              />
            </li>
          ))}
      </ul>
    );
  }
}
