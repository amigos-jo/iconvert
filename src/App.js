import React, { Component } from 'react'
import CardsHome from './components/CardsHome'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';

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
            <TableHome />
 
          <Home />
          <CardsHome />
          <HomeBack />
          <ExchangeForm />
          <MyChart />
 

 
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>
      
      
 
        </Router>

      </div>


    )
  }
}

export default App
