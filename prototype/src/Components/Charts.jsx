import React from 'react';
// import { Pie } from 'react-chartjs-2';
import {VictoryPie} from 'victory'
import './Charts.css'

const PieChart = () => {
  // Define the data for the pie chart
  const myData=[
  { x: "Age-(18-25)", y: 200 },
  { x: "Age-(25-35)", y: 500 },
  { x: "Age-(35-45)", y: 400},
  ];


  return (
    <div className='chart'>
    <div className='content'>
      <h2>Visual Data About the Users</h2>
      <p>Category Wise Data About our Users<br/>That Which Age Group has more Stress</p>
      </div>
      <div className='pie-chart'>
        <h1>Pie Chart</h1>
      <VictoryPie data={myData}
      colorScale={["blue","pink","green"]}
      radius={100}
      />
      </div>
    </div>
  );
};

export default PieChart;
