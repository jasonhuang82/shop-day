import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.scss";

class PageFooter extends Component {


  componentDidMount() {
    console.log('match',this.props.match);   
  }
  render () {
    return (
      <footer className="PageFooter">
          <div className="container">
            <div className="PageFooterList">
              <ul>
                <li>
                  <a href="mailto:oneday.ec@gmail.com">聯絡我們</a>
                </li>

                <li>
                  <a href="https://www.facebook.com/goodlittleday" target="_blank">facebook</a>
                </li>

                <li>
                  <a href="http://www.oneday.com.tw/" target="_blank">小日子官網</a>
                </li>
              </ul>
            </div>
            <div className="PageFooterCompany">
              <a href="http://www.7-11.com.tw/" target="_blank">
                <img src="https://shoplineimg.com/assets/footer/card_tw_711_pay.png" alt="7-11" height="40"/>
              </a>
              <a href="https://www.ecpay.com.tw/" target="_blank">
                <img src="https://shoplineimg.com/assets/footer/card_ecpay.png" alt="7-11" height="40"/>
              </a>
            </div>
          </div>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageFooter)


