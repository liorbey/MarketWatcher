import React, {useState, useEffect, useRef} from "react";
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const Price = props =>{
  const MyTypography = styled(Typography)({
    color: '#D9B08C',
      
  });
  const MyCard = styled(Card)({
    maxWidth: 550,
    margin: 10,
    padding: 10,
    height: 470,
    backgroundColor: '#D1E8E2',
      
  });
  
  const Media = styled(CardMedia)({
    height: 100,
    width: 100,
    marginLeft:'auto',
    marginRight:'auto',
    
  });

  const [currentPrice, setCurrentPrice] = useState();
  const [currentBid,setCurrentBid] = useState();
  const [currentAsk, setCurrentAsk] = useState();

  const socket = useRef(new WebSocket("wss://ws-feed.gdax.com"))
  const heartbeat = {
    type: "subscribe",
    channels: [
      {
        name: "ticker",
        product_ids: [props.name]
      }
    ]
  };
  
  useEffect(()=>{
    socket.current.onopen = () => {
      socket.current.send(JSON.stringify(heartbeat));
    };
    socket.current.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }
      setCurrentPrice(value.price);
      setCurrentBid(value.best_bid);
      setCurrentAsk(value.best_ask);
      return(
        socket.current.close()
      )
      
  }
  })


  return(
    <MyCard>
    <CardContent>
      <MyTypography gutterBottom variant="h5" component="h2" align='center'>
      {props.name}
      </MyTypography>
      <MyTypography paragraph variant="subtitle2" color="secondary.contrastText" component="p">
        Price:{currentPrice}
      </MyTypography>
      <MyTypography paragraph variant="subtitle2" color="textSecondary" component="p">
        Best BID:{currentBid}
      </MyTypography>
      <MyTypography paragraph variant="subtitle2" color="textSecondary" component="p">
        Best ASK:{currentAsk}
      </MyTypography>
    </CardContent>
    <Media
      image={require ('./Images/'+ props.name +'.png')}
    />
  </MyCard>
  );


}
export default Price;

/*
class Price extends React.Component {
  state = {
          label: 'BTC-USD',
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
          product_ids: ["BTC-USD"]
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
      <MyCard>
        <CardContent>
          <MyTypography gutterBottom variant="h5" component="h2" align='center'>
          {this.state.label}
          </MyTypography>
          <MyTypography paragraph variant="subtitle2" color="secondary.contrastText" component="p">
            Price:{this.state.price}
          </MyTypography>
          <MyTypography paragraph variant="subtitle2" color="textSecondary" component="p">
            Best bid:{this.state.best_bid}
          </MyTypography>
          <MyTypography paragraph variant="subtitle2" color="textSecondary" component="p">
            Best bid:{this.state.best_bid}
          </MyTypography>
        </CardContent>
        <Media
          image={require ("./BTC.png")}
        />
      </MyCard>
    );
  }
}
*/
