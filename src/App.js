import React, { Component } from 'react'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Profile from './components/profile/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import CardsHome from './components/CardsHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardContainer from './components/CardContainer';
import { withAuth0 } from '@auth0/auth0-react';



export class App extends Component {
  render() {
    console.log('app', this.props.auth0);
    return (
      <div>
        <Router>
          <Header />
          <Banner className='bannerEn ' />
          <Switch>
            <Route exact path="/">
            <CardContainer />
             <TableHome />
            <Home />
            <CardsHome/> 
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs /> 
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ?
               <Profile userPass={this.props.auth0}/> :   <> <CardContainer />  <TableHome />  <Home /> <CardsHome/></>
              }
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default  withAuth0(App);
