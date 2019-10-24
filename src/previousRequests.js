import React, { useState } from 'react';

export default function PreviousRequests(props) {

  const [coinData, setCoinData] = useState(props.infoArray);

  return (
    <div className="coin-info-chart">
        <div className="coin-name">
            {console.log(coinData)}
            {coinData.map((data) =>
            (<div class="row">
                <div>{data[0]}</div>
                <div>{data[1]}</div>
                <div>{data[2]}</div>
            </div>
            ))}
        </div>
    </div>
  );
}