import React, { Component } from 'react';
import { connect } from 'react-redux';
// self components
import TextTitle from '@/components/TextTitle';
import "./style.scss";

class PageCustomerInfos extends Component {

  state = {
    
  };
  componentDidMount() {
      console.log('match',this.props.match);
      
  }
  render () {
    return (
      <div className="PageCustomerInfos">
        <div className="container">
          <TextTitle title="填寫聯絡資料"/>
          <section className="PageCustomerInfosForm">
            <div className="row">
              {/* 姓名 */}
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="customName">姓名</label>
                  <input type="email" className="form-control" id="customName" placeholder="請輸入姓名"/>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="customName">姓名</label>
                  <input type="email" className="form-control" id="customName" placeholder="請輸入姓名" />
                </div>
              </div>
              {/* 姓名 end*/}
              {/* 生日 */}
              <div className="col-12">
                <div className="form-group">
                  <label>生日</label>
                  <div className="row">
                    <div className="col-4">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* 生日 end */}
              {/* 地址 */}
              <div className="col-12">
                {/* top */}
                <div className="form-group">
                  <label>地址</label>
                  <div className="row">
                    <div className="col-6">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className="form-group pt-3">
                  <input type="email" className="form-control" id="customName" placeholder="請輸入詳細地址" />
                </div>
              </div>
              {/* 地址 end*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(PageCustomerInfos)


