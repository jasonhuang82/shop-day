import React, { Component,Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// self scss
import "@/styles/global.scss";
// self component
import PageHome from '@/pages/PageHome';
import PageProduct from '@/pages/PageProduct';
import PageFooter from '@/pages/PageFooter';
import PageHeader from '@/pages/PageHeader';
// import Persons from '@/pages/Persons';
// import PhotoList from '@/pages/PhotoList';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PageHeader />
          <main className="PageContent">
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/product/:pid?" component={PageProduct} />
              <Route path="*" render={props => <div>404</div>}/>
            </Switch>
          </main>
          <PageFooter />
        </div>
      </Router>
    );
  }
}

export default App;

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