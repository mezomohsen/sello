import logo from './logo.svg';
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/style.css";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Man from './components/man';
import Woman from './components/woman';
import Counter from './components/counter';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Form from './components/form';

const token = localStorage.getItem('token')
axios.defaults.baseURL = 'https://habbals.com/store/api';
axios.defaults.headers.common['token'] = token;


class App extends Component {


  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div>
            <Switch>
              <Route path="/Form">
                <Form />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/woman">
                <Woman />
              </Route>
              <Route path="/man">
                <Man />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>



      </div>

    );
  }
}

export default App;
