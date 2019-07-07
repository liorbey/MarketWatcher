import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Charts from './Charts/Charts';
import ChartsEth from './Charts/ChartsEth';
import ChartsLtc from './Charts/ChartsLtc';
import Price from './Prices/Price';
import PriceEth from './Prices/PriceEth';
import PriceLtc from './Prices/PriceLtc';
import {Bitcoin,Eth,Ltc,Xrp,Eos} from './cryptoList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Display from './Display';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
  
    flexGrow: 1,
    fontStyle: 'italic',
    
  },
  appBarSpacer: theme.mixins.toolbar,
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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 440,
    marginTop: 50,
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [valuez, setValuez] = React.useState(0);

  function handleChange(event, newValue) {
    setValuez(newValue);
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color= "primary" position="absolute">
        <Toolbar className={classes.toolbar}> 
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <img src="https://img.pngio.com/m-w-logo-png-images-mw-png-1758_697.png" alt="Market Watch" height="80" width="80" />
          market watch
          </Typography>
        </Toolbar>
        <Tabs variant="fullWidth" indicatorColor="primary" textColor="background" value={valuez} onChange={handleChange}>
          <Tab value = "BTC-USD" label="BTC-USD" />
          <Tab value = "ETH-USD" label="ETH-USD" />
          <Tab value = "LTC-USD" label="LTC-USD" />
        </Tabs>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              {valuez === "BTC-USD" &&  <Charts/>}
              {valuez === "ETH-USD" &&  <ChartsEth/>}
              {valuez === "LTC-USD" &&  <ChartsLtc/>}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              {valuez === "BTC-USD" &&  <Price/>}
              {valuez === "ETH-USD" &&  <PriceEth/>}
              {valuez === "LTC-USD" &&  <PriceLtc/>}
              </Paper>
            </Grid>
            {/* News */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              {valuez === "BTC-USD" &&  <Display/>}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}




  

