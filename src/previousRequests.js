import React from 'react';

export default function PreviousRequests(props='defaut') {

  let coinHistory = []

//   let coinInfos = 
//     return( <div class="row">
//                 <div>{data[0]}</div>
//                 <div>{data[1]}</div>
//                 <div>{data[2]}</div>
//             </div>
//         )
//   })

  console.log(props)

  return (
    <div className="coin-info-chart">
        <div className="coin-name">
            {props.coinInfo.map((data) => 
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