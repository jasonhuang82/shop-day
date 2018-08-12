import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style.scss";

class PageFooter extends Component {


  componentDidMount() {
    // console.log('match',this.props.match);   
  }
  render () {
    return (
      <footer className="PageFooter">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="PageFooterLinks">
                  <div className="PageFooterLink">
                    <a href="mailto:oneday.ec@gmail.com">聯絡我們</a>
                  </div>

                  <div className="PageFooterLink">
                    <a href="https://www.facebook.com/gooddivttleday" target="_blank">facebook</a>
                  </div>

                  <div className="PageFooterLink">
                    <a href="http://www.oneday.com.tw/" target="_blank">小日子官網</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="PageFooterCompany">
                  <a href="http://www.7-11.com.tw/" target="_blank">
                    <img src="https://shoplineimg.com/assets/footer/card_tw_711_pay.png" alt="7-11" height="40" />
                  </a>
                  <a href="https://www.ecpay.com.tw/" target="_blank">
                    <img src="https://shoplineimg.com/assets/footer/card_ecpay.png" alt="7-11" height="40" />
                  </a>
                </div>
              </div>

              <div className="col-12 ">
                <h5 className="d-flex justify-content-center align-items-center">
                  本網頁作品所載的所有資料、商標、標誌、圖像、連結及其他資料等，只供學術研究之用，不會用於任何商業用途
                </h5>
              </div>
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


