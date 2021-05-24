import React, { Component } from 'react'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AboutUs, { Test } from './components/AboutUs'
import CardsHome from './components/CardsHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardContainer from './components/CardContainer';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';


export class App extends Component {
  render() {
    // console.log('app', this.props.auth0.isAuthenticated);
    return (
      <div>
        <Router>
          <Header />
          <Banner className='bannerEn ' />
          <Switch>
            <Route exact path="/">
            <CardContainer />
            {/* <Test/> */}
             <TableHome />
            <Home />
            <CardsHome/> 
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs /> 
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default  withAuth0(App);
