import React, {useEffect, useState, useRef} from "react";
import { withStyles } from "@material-ui/core/styles";
import Chart from "./Chart";
import CircularProgress from '@material-ui/core/CircularProgress';
/*
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

const Chartz = props =>{
  
  const [updateGraph, setUpdateGraph] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

    

  const socket = useRef(new WebSocket("wss://ws-feed.gdax.com"))



  const subscribe = {
    type: "subscribe",
    channels: [
      {
        name: "ticker",
        product_ids: ["BTC-USD"]
      }
    ]
  };
  let lineChartData 

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true);
    },300);

    socket.current.onopen = () => {
      socket.current.send(JSON.stringify(subscribe));
    };
    socket.current.onmessage = e => {
      const value = JSON.parse(e.data);
     
      setUpdateGraph([...updateGraph, value.price]);

       lineChartData = {
        labels: [],
        datasets: [
          {
            type: "line",
            label: 'BTC-USD',
            backgroundColor: props.theme.palette.background.main,
            borderColor: props.theme.palette.primary.main,
            data: [{updateGraph}]
          },
        ]
      }
      
  }
  },[])

  
    
  return(


    <div className={props.classes["chart-container"]}>
        
    <Chart
      data={lineChartData}
    />
  </div>

  );
};


*/
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


class Charts extends React.Component {
  state = {
    isLoading: false,
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: 'BTC-USD',
          backgroundColor: this.props.theme.palette.background.main,
          borderColor: this.props.theme.palette.primary.main,
          data: []
        }
      ]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display:false
            },

            ticks: {
              autoSkip: true,
              maxTicksLimit: 10
            }
          }
        ],
        yAxes: [{
          gridLines: {
              display:false
          }   
        }],
      }
    }
  };

  updateChartState(){
      this.setState({label: 'btc-usd'})
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({ isLoading: true });
    },300)
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["BTC-USD"]
        }
      ]
    };

    this.ws = new WebSocket("wss://ws-feed.gdax.com");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }

      const oldBtcDataSet = this.state.lineChartData.datasets[0];
      const newBtcDataSet = { ...oldBtcDataSet };
      newBtcDataSet.data.push(value.price);

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newBtcDataSet],
        labels: this.state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        )
      };
      this.setState({ lineChartData: newChartData, isLoading: false });
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <CircularProgress className={classes.progress} />
    }

    return (
      
      <div className={classes["chart-container"]}>
        
        <Chart
          data={this.state.lineChartData}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Charts)