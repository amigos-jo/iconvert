import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
// import Footer from './components/Footer';
import 'bootstrap-css-only/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />

        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
