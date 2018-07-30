import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./style.scss";

class PageHeader extends Component {


  componentDidMount() {
    console.log('match',this.props.match);
    
  }
  render () {
    return (
      <header className="PageHeader">
        <div className="PageHeaderLogo">
          <Link to="/">
            <img src="https://shoplineimg.com/564d7e76e36c8e2a49000003/56b1d67a69702d746b021500/x200.webp?source_format=png" alt="logo"/>
          </Link>
        </div>
        <div className="PageHeaderInfos">
          <ul className="PageHeaderIconList">
            <li>
              <i className="fas fa-user"></i>
              <span>登入會員</span>
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i>
              <span>購物車</span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log('state',state);
  
  return {
    // persons: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addPerson: () => dispatch(addPersonHandle()),
    // delPerson: (personID) => dispatch(delPersonHandle(personID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader)


