import React, { useContext } from 'react';
import { Switch, Route } from 'react-router';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { About, Error404, Home } from './';
import { SideBar } from '../components';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(() => ({
  '@global': {
    '#root': {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  },
  appbar: {
    position: 'relative'
  },
  main: {
    flex: '1 0 auto'
  }
}));

const Page = () => {
  const classes = useStyle();
  const { title, sideBarState, setSideBarState } = useContext(MainContext);

  return (
    <>
      <AppBar className={classes.appbar} color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={e => {
              setSideBarState(!sideBarState);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <SideBar />
      <Container className={classes.main} component="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/" component={Error404} />
        </Switch>
      </Container>
      <Container className={classes.footer} component="footer">
        Footer
      </Container>
    </>
  );
};

export default Page;
