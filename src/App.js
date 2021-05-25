import React, { Component } from 'react'
import TableHome from './components/TableHome'
import Header from './components/Header';
import Banner from './components/Banner';
import axios from 'axios';
import Footer from './components/Footer';


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
import { logBase } from '@syncfusion/ej2-charts';



export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currency: [],
      currencyHistory: [],
      first: { value: 'EUR', type: 'EUR - Euro' },
      second: { value: 'EUR', type: 'EUR - Euro' },
      currAmount: 1,
      firstDate: '',
      secondDate: '',
      show:false

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


    console.log('First', this.state.first);

    console.log('Second', this.state.second);

  }


  fromChange = (e) => {
    console.log(this.state.first.value);

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
    console.log('First', this.state.first);


  }
  toChange = (e) => {
    console.log(this.state.second.value);
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
    console.log('second', this.state.second);

  }


  getData = async (e) => {


    const bodyData = `${this.state.first.value}/${this.state.second.value}/${this.state.currAmount}`;
    const bodyDataForChart = `${this.state.first.value}_${this.state.second.value}`;

    console.log(bodyData);
    try {
      e.preventDefault();



      const currencyAPI = `https://v6.exchangerate-api.com/v6/3df40b6fce06792f5c05339c/pair/${bodyData}`;


      const req = await axios.get(currencyAPI);
      this.setState({
        currency: req.data
      })

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

          const currencyChartAPI = `https://free.currconv.com/api/v7/convert?q=${bodyDataForChart}&compact=ultra&date=${this.state.secondDate}&endDate=${this.state.firstDate}&apiKey=8f01d570bb9926d1a349`
          const req2 = await axios.get(currencyChartAPI);
          historyArray.push(req2.data[bodyDataForChart])

        }
      }

      this.setState({
        currencyHistory: historyArray.reverse(),
        show:true
      })

console.log(this.state.currencyHistory);
   


    }
    catch (err) {
      console.log(err);
    }
  }



  componentDidMount = async () => {
    // const { user } = this.props.auth0;

    const API_URL = `${process.env.REACT_APP_HOST}/currency?`;
    const getCurrenyAPI = await axios.get(API_URL);
    this.setState({ currency: getCurrenyAPI.data });
  }


  updateFirstCurreny = (e) => this.setState({ firstCurrency: e.target.value });
  updateSecondCurreny = (e) => this.setState({ secondCurrency: e.target.value });

  addfavCurrency = async (e) => {
    e.preventDefault();

    const bodyData = `${this.state.firstCurrency}/${this.state.secondCurrency}`;

    const newBook = await axios.post(`${process.env.REACT_APP_HOST}/currency/${bodyData}`,);

    this.setState({
      book: newBook.data
    })
  }

  deleteBook = async (index) => {
    const newArrayOfBooks = this.state.book.filter((val, idx) => {
      return idx !== index;
    });
    this.setState({
      book: newArrayOfBooks
    })

    const query = {
      email: this.props.auth0.user.email
    }
    await axios.delete(`${process.env.REACT_APP_HOST}/books/${index}`, { params: query })
  }


  update = async (e) => {
    e.preventDefault();
    const reqBody = {
      name: this.state.name,
      status: this.state.status,
      description: this.state.description,
      email: this.props.auth0.user.email
    }
    const newBook = await axios.put(`${process.env.REACT_APP_HOST}/books/${this.state.index}`, reqBody); //put to update// send data to server

    this.setState({
      book: newBook.data
    })

  }

  showUpdateForm = (idx) => {

    const newBook = this.state.book.filter((value, index) => {
      return idx === index;

    });


    this.setState({
      index: idx,
      name: newBook[0].name,
      status: newBook[0].status,
      description: newBook[0].description,
      showUpdate: true
    });
  }


  render() {
    // console.log('app', this.props.auth0.isAuthenticated);
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
                show={this.state.show} />
              <TableHome />
              <Home />
              <CardsHome />
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

export default withAuth0(App);
