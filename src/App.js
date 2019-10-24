import React from 'react';
import './App.css';
import axios from 'axios';
import PreviousRequests from './previousRequests.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        coinData: [] 
    };
  }

  makeAPIRequest = (coin) => {
    let returnData = '';
    axios({
        "method":"GET",
        "url":"https://bravenewcoin-v1.p.rapidapi.com/ticker",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"bravenewcoin-v1.p.rapidapi.com",
        "x-rapidapi-key":"e510654385msh8dfb1ece4ffb115p107d8cjsn5df0a69527f1"
        },"params":{
        "show":"usd",
        "coin":"btc"
        }
        })
        .then((response)=>{
          console.log('Heres the response');
          console.log(response.data)
          returnData = response;
        })
        .catch((error)=>{
          console.log(error)
        })
    return returnData
  }

  getCoinInfo = () => {
    const coinNames = ['ltc', 'eth', 'dash', 'xrp', 'xmr', 'bch', 'neo', 'ada', 'eos']
    let holderArr = [];
    coinNames.forEach((coin) => {
      let holder = this.makeAPIRequest(coin);
      holderArr.push(holder)
      console.log('holder:');
      console.log(holder);      
      console.log('=======');
    })
    console.log(holderArr);
  }

  componentDidMount(prevProps) {
    this.getCoinInfo();
  };

  render() {
    return (
      <div className="App">
        <h1>Rendered</h1>
        {/* <PreviousRequests infoArray={this.state.coinData} /> */}
      </div>
    );
  }
}