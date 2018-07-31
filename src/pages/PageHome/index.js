import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import "./style.scss";

class PageHome extends Component {


  state = {
    
  }
  
  componentDidMount() {
  }
  render () {
    return (
      <div className="PageHome">
        <div className="container">

          {/* 產品列表 組件*/}
          <section>
            <div className="row">
              <div className="col-md-3">左邊</div>
              <div className="col-md-9">
                <h3>小日子商號</h3>
                <div className="row">
                  <div className="col-6 col-sm-3">
                    {/* 卡片 組件*/}
                    <div className="Card">
                      <div className="CardCover"></div>
                      <div className="CardInfos">
                        <div className="CardTitle">小日子大書袋</div>
                        <div className="CardPrice">NT$220</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*分頁 組件*/}
                <div className="Pagination">
                  <div className="PaginationPrev">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  <ul className="PaginationPages">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                  <div className="PaginationNext">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>  
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageHome)


