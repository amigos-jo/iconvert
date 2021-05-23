import React, { Component } from 'react'
import CardsHome from './components/CardsHome'
import TableHome from './components/TableHome'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
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
        <TableHome/>
        <Home/>
        <CardsHome/>
        </Router>
      </div>
    )
  }
}

export default App
