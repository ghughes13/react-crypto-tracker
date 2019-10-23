import React, { useState } from 'react';
import './App.css';
import PreviousRequests from './previousRequests.js';

export default function App() {

  const [coinInfo, setCoinInfo] = useState([[<strong>Name</strong>, <strong>Price</strong>, <strong>Time</strong>]]);

  let unirest = require("unirest");

  const getCoinInfo = (coin = 'btc') => {
    let req = unirest("GET", "https://bravenewcoin-v1.p.rapidapi.com/ticker");
    req.query({
      "show": "usd",
      "coin": coin
    });

    req.headers({
      "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
      "x-rapidapi-key": "e510654385msh8dfb1ece4ffb115p107d8cjsn5df0a69527f1"
    });

    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      setCoinInfo([...coinInfo, [res.body.coin_name, res.body.last_price, res.body.time_stamp.split(' ')[0]]])
      console.log(res.body)
    });
  }

  return (
    <div className="App">
      <div className="coin-btns">
        <button className="coin-btn" onClick={() => {getCoinInfo('btc')}}>Bitcoin</button>
        <button className="coin-btn" onClick={() => {getCoinInfo('ltc')}}>Litecoin</button>
        <button className="coin-btn" onClick={() => {getCoinInfo('eth')}}>Ethereum</button>
      </div>
      <PreviousRequests coinInfo={coinInfo}/>
    </div>
  );
}