import React, { Component } from 'react';
import { Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {getImgAbsUrl} from '@/config/reUseMethod';
import "./style.scss";

class PageHeader extends Component {

  state = {
    activeBorderLeftPos: {
      left: 0
    }
  }

  componentDidMount = () => {
    console.log('match',this.props);
    let pathName = this.props.location.pathname;
    switch (pathName) {
      case "/":
        break;
      case "/shopcart":
        break;
      default:
        break;
    }
  }


  // click Link 時移動下方狀態條
  activeBorderPosition = (e,posIndex) => {
    // 找出所有 li 的數量，去計算總共有幾個用100去分等份
    // 所有 li 的數量
    const linkListNoActiveBorder = (
      [...e.target.closest("ul").childNodes]
      .filter(child => [...child.classList].every(classStr => classStr !== 'PageHeaderActiveBorder'))
    );
    // li 的有幾個等份要分
    const linkListLength = linkListNoActiveBorder.length;
    // 用100%去分剛剛算好的等份，就能算出每個li占多少%寬度，
    // 在乘目前所click的位置就是該位置的left
    let leftPos = (100 / linkListLength) * posIndex;
    this.setState({
      activeBorder: {
        left: `${leftPos}%`
      }
    });
  }
  render () {
    return (
      <header className="PageHeader">
        <div className="container">
          <div className="PageHeaderContainer">
            <div className="PageHeaderLogo">
              <Link to="/">
                <img src={getImgAbsUrl('logo')} alt="logo"/>
              </Link>
            </div>
            <ul className="PageHeaderInfos">
                <li onClick={e => this.activeBorderPosition(e,0)}>
                  <Link to={{
                    pathname: '/',
                    search: this.props.location.search
                  }}>
                    <i className="PageHeaderIcon fas fa-home"></i>
                    <span className="PageHeaderTitle">購物商城</span>
                  </Link>
                </li>
                <li onClick={e => this.activeBorderPosition(e,1)}>
                  <Link
                    to={{
                      pathname: '/shopcart',
                      search: this.props.location.search
                    }}
                  >
                    <i className="PageHeaderIcon fas fa-shopping-cart"></i>
                    <span className="PageHeaderTitle">購物車</span>
                    <span className="PageHeaderCartCount">
                      {this.props.shopCart.length > 0 && this.props.shopCart.length}
                    </span>
                  </Link>
                </li>
                <li 
                  className="PageHeaderActiveBorder"
                  style={this.state.activeBorder}
                ></li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageHeader));


