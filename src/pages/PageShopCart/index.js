import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.scss";

class PageShopCart extends Component {


  componentDidMount() {
      // console.log('match',this.props.match);
      
  }
  render () {
    return (
      <div className="PageShopCart">
        <div className="container">
          <div className="PageShopCartTitle">目前購物車有{this.props.shopCart.length}項</div>
          {this.props.shopCart.length > 0 
            ? (
              <ul className="PageShopCartList">

              </ul>
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
    // addPerson: () => dispatch(addPersonHandle()),
    // delPerson: (personID) => dispatch(delPersonHandle(personID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageShopCart)


