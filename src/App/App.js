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
import Charts from '../Components/Charts/Charts';
import ChartsEth from '../Components/Charts/ChartsEth';
import ChartsLtc from '../Components/Charts/ChartsLtc';
import Price from '../Components/Prices/Price';
import PriceEth from '../Components/Prices/PriceEth';
import PriceLtc from '../Components/Prices/PriceLtc';
import {Bitcoin,Eth,Ltc} from '../Components/cryptoList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import News from '../Components/News/News';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#424242',
    
  },

  tab: {
    backgroundColor: '#ffc400',
    flexGrow: 1,
    width: "100%",
 
  },
  title: {
    flexGrow: 1,
    fontStyle: 'italic', 
    align: 'center', 
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
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color= "secondary" position="absolute">
        <Toolbar className={classes.title}> 
          <Typography>
          <img src="https://img.pngio.com/m-w-logo-png-images-mw-png-1758_697.png" alt="Market Watch" height="80" width="80" />
          </Typography>
          <Typography>
            CRYPTICmarket
          </Typography>
        </Toolbar>
        <div className={classes.tab}>
          <Tabs 
          centered
          variant="fullWidth"
          scrollButtons="auto"
          indicatorColor="primary"
          position="static" 
          value={value} 
          onChange={handleChange}>
            <Tab label="BTC-USD" />
            <Tab label="ETH-USD" />
            <Tab label="LTC-USD" />
          </Tabs>
        </div>
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
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              {value === 0 &&  <Price/>}
              {value === 1 &&  <PriceEth/>}
              {value === 2 &&  <PriceLtc/>}
              </Paper>
            </Grid>
            {/* News */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
              {value === 0 &&  <News/>}
              {value === 1 &&  <News/>}
              {value === 2 &&  <News/>}
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Typography>
          powered by newsAPI
        </Typography>

      </main>
    </div>
  );
}




  

