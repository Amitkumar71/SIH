import React from 'react';
// import { Pie } from 'react-chartjs-2';
import {VictoryPie} from 'victory'
import './Charts.css'

const PieChart = () => {
  const myData=[
  { x: "Age-(18-25)", y: 200 },
  { x: "Age-(25-35)", y: 500 },
  { x: "Age-(35-45)", y: 400},
  ];

  const myData1=[
    { x: "Health workers", y: 200 },
    { x: "public", y: 500 },
    ];


  return (
    <div className='chart'>
    <div className='content'>
      <h2>User Data Visualization</h2>
      <p>Collective Insights about our users with our interactive charts and graphs, illuminating the user's journey on our site</p>
      </div>
      <div className='charts'>
      <div className='pie-chart'>
        <h1>According to Age</h1>
      <VictoryPie data={myData}
      colorScale={["blue","pink","green"]}
      radius={100}/>
      </div>
      <div className='pie-chart'>
        <h1>Type of User</h1>
      <VictoryPie data={myData1}
      colorScale={["blue","pink","green"]}
      radius={100}/>
      </div>
      </div>
    </div>
  );
};

export default PieChart;
