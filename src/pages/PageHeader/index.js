import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./style.scss";

class PageHeader extends Component {


  componentDidMount() {
    // console.log('match',this.props.match);
    
  }
  render () {
    return (
      <header className="PageHeader">
        <div className="container">
          <div className="PageHeaderContainer">
            <div className="PageHeaderLogo">
              <Link to="/">
                <img src="https://shoplineimg.com/564d7e76e36c8e2a49000003/56b1d67a69702d746b021500/x200.webp?source_format=png" alt="logo"/>
              </Link>
            </div>
            <ul className="PageHeaderInfos">
                <li>
                  <i className="PageHeaderIcon fas fa-home"></i>
                  <span className="PageHeaderTitle">購物商城</span>
                </li>
                <li>
                  <i className="PageHeaderIcon fas fa-shopping-cart"></i>
                  <span className="PageHeaderTitle">購物車</span>
                  <span className="PageHeaderCartCount">
                    {this.props.shopCart.length > 0 && this.props.shopCart.length}
                  </span>
                </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    shopCart: state.shopCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)


