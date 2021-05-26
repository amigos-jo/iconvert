import React from 'react'
import { Chart } from 'react-charts'



function MyChart(props) {

  let finalArray = [];
  let x = 0
  props.currencyHistory.map(element1 => {
    for (let element2 in element1) {

      finalArray.push([x, element1[element2]]);
      x = x + 1;
    }
    
  });




  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: finalArray
      },

    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{

        width: '80%',
        height: '300px',
        margin: '20px auto'

      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
  return lineChart;

}

export default MyChart;