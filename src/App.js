import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { getImgAbsUrl } from '@/config/reUseMethod';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// self scss
import "@/styles/global.scss";
// self component
import PageHome from '@/pages/PageHome';
import PageShopCart from '@/pages/PageShopCart';
import PageFooter from '@/pages/PageFooter';
import PageHeader from '@/pages/PageHeader';
import ProductAnimateCard from '@/components/ProductAnimateCard';
// import Persons from '@/pages/Persons';
// import PhotoList from '@/pages/PhotoList';

const baseName = (() => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return '/';
    case 'production':
      return '/shop-day'
    default:
      return '/';
  };
})();
class App extends Component {
  
  componentDidMount (){
    console.log('====================================');
    console.log(baseName);
    console.log('====================================');
  }
  render() {
    return (
      <Router baseName={baseName}>
        <div className="App">
          <PageHeader />
          <main className="PageContent">
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/shopcart" component={PageShopCart} />
              <Route path="*" render={props => <div>404</div>}/>
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

  <ol>
    <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
  </ol>
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