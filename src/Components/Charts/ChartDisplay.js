/*import React, {useEffect, useState, useRef} from "react";
import { withStyles } from "@material-ui/core/styles";
import Chart from "./Chart";
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const styles = theme => ({
  "chart-container": {
    height: 500
  },
  progress: {
    position: 'relative', 
    left: '50%', 
    top: '50%',

  },
});

const ChartDisplay = props =>{
    const [isLoading, setIsLoading] = useState(false)
    const [graphData,setGraphData] = useState([])

        const socket = useRef(new WebSocket("wss://ws-feed.gdax.com"))

        useEffect(()=>{
            setTimeout(()=>{
            setIsLoading(true);
            },300);

            const subscribe = {
            type: "subscribe",
            channels: [
                {
                name: "ticker",
                product_ids: ["BTC-USD"]
                }
            ]
            };
            socket.current.onopen = () => {
            socket.current.send(JSON.stringify(subscribe));
            };
            socket.current.onmessage = e => {
            const value = JSON.parse(e.data);

            setGraphData([...graphData, {price: value.price}])
            
            setIsLoading(false);
        }
        },[])
 
    

  return(
    <div>
    <LineChart width={300} height={100} data= {graphData}>
        <Line type='monotone' dataKey='price' stroke='#8884d8' strokeWidth={2} />
      </LineChart>
      </div>
  );
}

export default withStyles(styles, { withTheme: true })(ChartDisplay);*/