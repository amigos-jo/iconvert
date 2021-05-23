import React, { Component } from 'react';
import HomeBack from './components/HomeBack';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeForm from './components/ExchangeForm';
import Chart from './components/Chart';
import MyChart from './components/Chart';



export class App extends Component {
  render() {
    return (
      <>
        <HomeBack />
        <ExchangeForm />
        <MyChart/>
      </>
    )
  }
}

export default App
