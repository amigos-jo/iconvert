import React from 'react'
import { Chart } from 'react-charts'

// console.log(this.props.currencyHistory);


function MyChart(props) {

  // console.log(this.props.currencyHistory);
  // if(this.props.currencyHistory.length>0){
  // let finalArrayOfArrays = [];
  // for (let i = 0; i <= 3; i++) {
  //   for (let j = 0; j < historyArray.reverse()[i].length; j++) {
  //     let myArray = [Object.keys[historyArray.reverse()[i][j]], Object.values[historyArray.reverse()[i][j]]]
  //     finalArrayOfArrays.push(myArray);

  //   }

  // }

  // }
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