import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1.410463], [1, 1.410359], [2, 1.410359], [3, 1.41039], [4, 1.410394],[5,1.410459],[6,1.410392],[7,1.410475],[8,1.410359]]
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
        // width: '80%',
        // height: '300px',
        // margin:'20px auto'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
  return lineChart;
}

export default MyChart;