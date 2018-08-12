import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import cx from "classnames";
// redux action create
import { delFromCart } from "@/actions";
import ShopCartList from "@/components/ShopCartList";

import "./style.scss";

class PageShopCart extends Component {


  componentDidMount() {
      // console.log('match',this.props.match);
      
  }

  countTotalPrice = () => {
    return this.props.shopCart.reduce((total, currProduct) => {
      total += Math.ceil(currProduct.price * currProduct.discount)
      return total;
    },0);
  }
  render () {
    return (
      <div className="PageShopCart">
        <div className="container">
          <div className="PageShopCartTitle">購物清單</div>
          
          {this.props.shopCart.length > 0 
            ? (
              <Fragment>
                <ShopCartList
                  cartData={this.props.shopCart}
                  onProductDelete={productIndex => this.props.delFromCart(productIndex)}
                />
                <div className="PageShopCartTotal">
                  <div className="PageShopCartTotalNum">目前購物車有{this.props.shopCart.length}項</div>
                  <div className="PageShopCartTotalPrice">總金額：{this.countTotalPrice()}</div>
                </div>
              </Fragment>
            )
            : (
              <div className="PageShopCartNoProduct">
                <div className="PageShopCartNoProductTitle">目前還沒有選購商品哦</div>
                <div className="PageShopCartNoProductIcon">
                  <i className="PageShopCartNoProductIcon far fa-angry"></i>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log('state',state);
  
  return {
    shopCart: state.shopCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delFromCart: productIndex => dispatch(delFromCart(productIndex))
    // addPerson: () => dispatch(addPersonHandle()),
    // delPerson: (personID) => dispatch(delPersonHandle(personID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageShopCart)


