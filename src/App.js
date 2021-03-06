/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
import axios from 'axios';
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

  constructor(props) {
    super(props);
    this.state = {
      currency: [],
      currencyHistory: [],
      first: { value: 'AFN', type: 'AFN - Afghanistan' },
      second: { value: 'AFN', type: 'AFN - Afghanistan' },
      currAmount: 1,
      firstDate: '',
      secondDate: '',
      show: false

    }


  }
  changeAmount = (e) => {
    this.setState({
      currAmount: e.target.value
    })
  }

  changeButton = () => {
    let firstVar = this.state.first;
    this.setState({
      first: this.state.second,
      second: firstVar
    })




  }


  fromChange = (e) => {

    let myValue = e.target.value;
    let myType = '';
    for (let i = 0; i < e.target.length; i++) {

      if (e.target[i].value === myValue) {
        myType = e.target[i].textContent;

      }

    }
    this.setState({
      first: { value: myValue, type: myType }
    })


  }
  toChange = (e) => {
    let myValue = e.target.value;
    let myType = '';
    for (let i = 0; i < e.target.length; i++) {

      if (e.target[i].value === myValue) {
        myType = e.target[i].textContent;

      }

    }
    this.setState({
      second: { value: myValue, type: myType }
    })

  }


  getData = async (e) => {


    const bodyData = `${this.state.first.value}/${this.state.second.value}/${this.state.currAmount}`;
    const bodyDataForChart = `${this.state.first.value}_${this.state.second.value}`;

    try {
      e.preventDefault();


      let APIKey = process.env.REACT_APP_KEY;
      const currencyAPI = `https://v6.exchangerate-api.com/v6/${APIKey}/pair/${bodyData}`;


      const req = await axios.get(currencyAPI);
      this.setState({
        currency: req.data
      })


      console.log(this.state.currency);
      // .................................................................................................
      let historyArray = [];
      let dateArray = [];
      let today = new Date();
      let days = today.getDate();
      let month = today.getMonth() + 1;


      let date = today.getFullYear() + '-' + month + '-' + days;  // 2021-5-25

      for (let i = 1; i <= 30; i++) {

        if (Number(days) === 1) {
          date = today.getFullYear() + '-' + month + '-' + days;
          dateArray.push(date);
          month = month - 1;
          days = 29;
        }


        date = today.getFullYear() + '-' + month + '-' + days;
        dateArray.push(date);

        days = days - 1
      }

      for (let i = 0; i < dateArray.length; i++) {

        if (i === 0 || i === 7 || i === 14 || i === 21) {

          this.setState({
            firstDate: dateArray[i]
          })
        }
        if (i === 6 || i === 13 || i === 20 || i === 27) {
          this.setState({
            secondDate: dateArray[i]
          })
          let APIHistoryKey = process.env.REACT_APP_KEY_HISTORY;
          const currencyChartAPI = `https://free.currconv.com/api/v7/convert?q=${bodyDataForChart}&compact=ultra&date=${this.state.secondDate}&endDate=${this.state.firstDate}&apiKey=${APIHistoryKey}`
          const req2 = await axios.get(currencyChartAPI);
          historyArray.push(req2.data[bodyDataForChart])

        }
      }

      this.setState({
        currencyHistory: historyArray.reverse(),
        show: true
      })






    }
    catch (err) {
    }
  }





  render() {

    return (
      <div>
        <Router>
          <Header />
          <Banner className='bannerEn ' />
          <Switch>
            <Route exact path="/">

              <CardContainer
                first={this.state.first}
                second={this.state.second}
                getData={this.getData}
                changeButton={this.changeButton}
                fromChange={this.fromChange}
                toChange={this.toChange}
                currAmount={this.state.currAmount}
                changeAmount={this.changeAmount}
                currencyHistory={this.state.currencyHistory}
                show={this.state.show}
                currency={this.state.currency} />


              <TableHome />
              <Home />
              <CardsHome />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/profile">

              {this.props.auth0.isAuthenticated ?
                <Profile userPass={this.props.auth0} /> : <>
                  <CardContainer
                    first={this.state.first}
                    second={this.state.second}
                    getData={this.getData}
                    changeButton={this.changeButton}
                    fromChange={this.fromChange}
                    toChange={this.toChange}
                    currAmount={this.state.currAmount}
                    changeAmount={this.changeAmount}
                    currencyHistory={this.state.currencyHistory}
                    show={this.state.show}
                    currency={this.state.currency} />  <TableHome />  <Home /> <CardsHome /></>

              }
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default withAuth0(App);
