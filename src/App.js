import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // withRouter
} from "react-router-dom";
import { getImgAbsUrl } from '@/config/reUseMethod';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// self scss
import "@/styles/global.scss";
// self component

import PageHome from '@/pages/PageHome';
import PageShopCart from '@/pages/PageShopCart';
// import PageCustomerInfos from '@/pages/PageCustomerInfos';
import PageFooter from '@/pages/PageFooter';
import PageHeader from '@/pages/PageHeader';
import ScrollToTop from '@/components/ScrollToTop';
import ProductAnimateCard from '@/components/ProductAnimateCard';
// import AlertMessage from '@/components/AlertMessage';


import MemberVail from '@/components/MemberVail';
class App extends Component {
  componentDidMount = async () => {
    
  }
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="App">
            <MemberVail/>
            <PageHeader />
            <main className="PageContent">
              <Switch>
                <Route exact path="/" component={PageHome} />
                <Route path="/shopcart" component={PageShopCart} />
              </Switch>
            </main>
            <PageFooter />
            <ProductAnimateCard 
              imgUrl={
                this.props.productListDatas.length >0
                ? getImgAbsUrl(this.props.productListDatas[this.props.productAnimateCardIndex].coverName)
                : ''
              }
            />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    productListDatas: state.productListDatas,
    productAnimateCardIndex: state.productAnimateCardIndex
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
  <ul>
    <li>
      <Link to="/photo-list">photo-list</Link>
    </li>
  </ul>
  <Switch>
    <Route exact path="/" component={Persons} />
    <Route exact path="/photo-list" component={PhotoList} />
  </Switch>
*/