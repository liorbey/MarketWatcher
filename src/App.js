import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Charts from './Charts/Charts';
import ChartsEth from './Charts/ChartsEth';
import ChartsLtc from './Charts/ChartsLtc';
import Price from './Price';

import {Bitcoin,Eth,Ltc,Xrp,Eos} from './cryptoList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
    height: 340,
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
      <AppBar color= "primary" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Market Watch
          </Typography>
        </Toolbar>
        <Tabs variant="fullWidth" indicatorColor="secondary" textColor="secondary" value={valuez} onChange={handleChange}>
          <Tab value = "BTC-USD" label="BTC-USD" />
          <Tab value = "ETH-USD" label="ETH-USD" />
          <Tab value = "LTC-USD" label="LTC-USD" />
        </Tabs>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <Bitcoin />
              </ListItemIcon>
              <ListItemText primary="BTC-USD" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Eth />
              </ListItemIcon>
              <ListItemText primary="ETH-USD" />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>
            <div>
              <ListSubheader inset>Others</ListSubheader>
              <ListItem button>
                <ListItemIcon>
                  <Ltc />
                </ListItemIcon>
                <ListItemText primary="LTC-USD" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Xrp/>
                </ListItemIcon>
                <ListItemText primary="XRP-USD" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Eos/>
                </ListItemIcon>
                <ListItemText primary="EOS-USD" />
              </ListItem>
            </div>
        </List>
      </Drawer>
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
              {valuez === "ETH-USD" &&  <ChartsEth/>}
              {valuez === "LTC-USD" &&  <ChartsLtc/>}
              </Paper>
            </Grid>
            {/* News */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}




  

