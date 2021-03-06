import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chart from "./Chart";
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  "chart-container": {
    height: '100%'
  },
  progress: {
    position: 'relative', 
    left: '50%', 
    top: '50%',

  },
});


class ChartsEos extends React.Component {
  state = {
    isLoading: false,
    lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          label: 'EOS-USD',
          backgroundColor: this.props.theme.palette.background.main,
          borderColor: this.props.theme.palette.primary.main,
          data: []
        }
      ]
    }
  };

  updateChartState(){
      this.setState({label: 'EOS-USD'})
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
          product_ids: ["EOS-USD"]
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
          options={this.state.lineChartOptions}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ChartsEos);
