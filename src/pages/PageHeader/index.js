import React, { Component } from 'react';
import { Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {getImgAbsUrl} from '@/config/reUseMethod';
import "./style.scss";

class PageHeader extends Component {

  state = {
    activeBorderIndex: 0 
  }

  linkListDom = null;

  // 畫面載入時先看路由在哪將狀態條移到該位置
  componentDidMount = () => {
    // console.log('match',this.props);
    let pathName = this.props.location.pathname;
    let activeBorderIndex = 0;
    switch (pathName) {
      case "/":
        activeBorderIndex = 0;
        break;
      case "/shopcart":
        activeBorderIndex = 1;
        break;
      default:
        activeBorderIndex = 0;
        break;
    }
    this.setState({ activeBorderIndex });
  }

  // header Link 的數量，用於下方計算狀態條left位置 % 數
  linkListLength = () => {
    // 因為didMount時虛擬dom還沒生成完就要使用 ref 
    // 而這時ref 還是null，要等虛擬dom生完會在觸發一次re-render，把 dom 塞給ref
    // 此時ref才真的存在，此段預防null情狀抱錯，所以預設回傳 0 也就是沒有 link 存在
    if (this.linkListDom === null) return 0;
    // 找出所有 li 的數量，去計算總共有幾個用100去分等份
    // 所有 li 的數量
    const linkListNoActiveBorder = (
      [...this.linkListDom.childNodes]
        .filter(child => [...child.classList].every(classStr => classStr !== 'PageHeaderActiveBorder'))
    );
    // li 的有幾個等份要分
    return linkListNoActiveBorder.length;
  };

  // click Link 時移動下方狀態條
  activeBorderPosition = (posIndex) => {
    // 找出所有 li 的數量，去計算總共有幾個用100去分等份
    // 所有 li 的數量
    // const linkListNoActiveBorder = (
    //   [...e.target.closest("ul").childNodes]
    //   .filter(child => [...child.classList].every(classStr => classStr !== 'PageHeaderActiveBorder'))
    // );
    // // li 的有幾個等份要分
    // const linkListLength = linkListNoActiveBorder.length;
    // 用100%去分剛剛算好的等份，就能算出每個li占多少%寬度，
    // 在乘目前所click的位置就是該位置的left
    // let leftPos = (100 / this.linkListLength) * this.state.activeBorderIndex;
    this.setState({ activeBorderIndex: posIndex });
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
            <ul 
              className="PageHeaderInfos"
              ref={el => this.linkListDom = el}
            >
                <li onClick={e => this.activeBorderPosition(0)}>
                  <Link to={{
                    pathname: '/',
                    search: this.props.location.search
                  }}>
                    <i className="PageHeaderIcon fas fa-home"></i>
                    <span className="PageHeaderTitle">購物商城</span>
                  </Link>
                </li>
                <li onClick={e => this.activeBorderPosition(1)}>
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
                  style={{ 
                    left: `${(100 / this.linkListLength()) * this.state.activeBorderIndex}%` 
                  }}
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


