import React from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Charts from '../Components/Charts/Charts';
import ChartsEth from '../Components/Charts/ChartsEth';
import ChartsLtc from '../Components/Charts/ChartsLtc';
import ChartsXrp from '../Components/Charts/ChartsXrp';
import ChartsEos from '../Components/Charts/ChartsEos';
import Price from '../Components/Prices/Price';
import PriceEth from '../Components/Prices/PriceEth';
import PriceLtc from '../Components/Prices/PriceLtc';
import PriceXrp from '../Components/Prices/PriceXrp';
import PriceEos from '../Components/Prices/PriceEos';
import {Bitcoin,Eth,Ltc,Xrp,Eos} from '../Components/cryptoList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import News from '../Components/News/News';
import marketwatchlogo from './marketwatchlogo.png';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#166464',
  },

  tab: {
    flexGrow: 0.5,
    width: "100%",
    marginBottom: theme.spacing(1),
    
  },
  title: {
    padding: '2px',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: '#FFCB9A',
  },
  fixedHeight: {
    height: 500,
    marginTop: 100,
  },
  right: {
    
  },
  rightTabs: {
    fontSize: 8,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },

  toolbar: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-left',
  },
  appbar: {
    backgroundColor: '#2C3531',
  },

}));


export default function Dashboard() {
  const classes = useStyles();
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
        <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/home"
          >
            <img src={marketwatchlogo} alt="Market Watch" />
          </Link>
          <div className={classes.right}>
          <Tabs
          scrollButtons="on"
          centered
          variant="scrollable"
          position="static" 
          value={value} 
          className = {classes.rightTabs}
          onChange={handleChange}>
            <Tab icon={<Bitcoin/>} label="BTC-USD" />
            <Tab icon={<Eth/>} label="ETH-USD" />
            <Tab icon={<Ltc/>} label="LTC-USD" />
            <Tab icon={<Xrp/>} label="XRP-USD" />
            <Tab icon={<Eos/>} label="EOS-USD" />
          </Tabs>
            </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              {value === 0 &&  <Charts/>}
              {value === 1 &&  <ChartsEth/>}
              {value === 2 &&  <ChartsLtc/>}
              {value === 3 &&  <ChartsXrp/>}
              {value === 4 &&  <ChartsEos/>}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              {value === 0 &&  <Price/>}
              {value === 1 &&  <PriceEth/>}
              {value === 2 &&  <PriceLtc/>}
              {value === 3 &&  <PriceXrp/>}
              {value === 4 &&  <PriceEos/>}
              </Paper>
            </Grid>
            {/* News */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              {value === 0 &&  <News/>}
              {value === 1 &&  <News/>}
              {value === 2 &&  <News/>}
              {value === 3 &&  <News/>}
              {value === 4 &&  <News/>}
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Typography style={{fontSize:'10px'}}>
          powered by newsAPI
        </Typography>

      </main>
    </div>
  );
}




  

