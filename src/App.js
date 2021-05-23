import React, { Component } from 'react'
import CardsHome from './components/CardsHome'
import TableHome from './components/TableHome'
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
          <Switch>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
          </Switch>
          <TableHome />
          <Home />
          <CardsHome />
          <HomeBack />
          <ExchangeForm />
          <MyChart />
        </Router>

      </div>


    )
  }
}

export default App
