import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => {
    
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: 'label'
        },

        scales: {
          xAxes: [
            {
              gridLines: {
                display:false
              },
            }
          ],
          yAxes: [{
            gridLines: {
                display:false
            }   
          }],
        }
      }
    return(
        <Line data={props.data} options={lineChartOptions} />
    )
}



export default Chart;

