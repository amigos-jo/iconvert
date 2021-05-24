import React, { Component } from 'react'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
 
import Footer from './components/Footer';

 
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import CardsHome from './components/CardsHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardContainer from './components/CardContainer'


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <br/>
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
 
            <CardContainer />
            <TableHome />
            <Home />
            <CardsHome/>
            </Route>
 
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
