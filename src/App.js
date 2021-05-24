import React, { Component } from 'react'
import CardsHome from './components/CardsHome'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import HomeBack from './components/HomeBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeForm from './components/ExchangeForm';
import MyChart from './components/Chart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Banner className='bannerEn ' />
          <Switch>
            <Route exact path="/">
              <ExchangeForm />
              <MyChart />
              <TableHome />
              <HomeBack />
              <CardsHome />
            </Route>
            {/*  
          <Home /> */}
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default App
