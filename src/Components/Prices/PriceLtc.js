import React from "react";

class PriceLtc extends React.Component {
  state = {
          label: 'LTC-USD',
          price: '',
          best_bid: '',
          best_ask: '',
        }

  componentDidMount() {
    const heartbeat = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["LTC-USD"]
        }
      ]
    };

    this.ws = new WebSocket("wss://ws-feed.gdax.com");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(heartbeat));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }

      const price = value.price;
      this.setState({price: price})

      const best_bid = value.best_bid;
      this.setState({best_bid: best_bid})
      
      const best_ask = value.best_ask;
      this.setState({best_ask: best_ask})
  }
}

  componentWillUnmount() {
    this.ws.close();
  }

  render() {

    return (
      <div >
          <h1 style= {{textAlign: 'center'}} >{this.state.label}</h1>
          <h2>Price:{this.state.price}</h2>
          <h3>Best bid:{this.state.best_bid}</h3>
          <h3>Best ask:{this.state.best_ask}</h3>
      </div>
    );
  }
}

export default PriceLtc;
