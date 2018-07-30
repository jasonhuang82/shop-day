import React, { Component,Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/global.scss";
import Persons from '@/containers/Persons';
import PhotoList from '@/containers/PhotoList';


class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <ol>
            <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
          </ol>
          <ul>
            <li>
              <Link to="/photo-list">photo-list</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" render={(props) => <Persons {...props}/>} />
            <Route exact path="/photo-list" render={(props) => <PhotoList {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
