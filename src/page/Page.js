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
import { Menu as MenuIcon, Favorite as FavIcon } from '@material-ui/icons';
import { Author, App, Error404, Home, PrivacyPolicy } from './';
import { SideBar } from '../components';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(theme => ({
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
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center'
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
          <Route
            exact
            path="/playstore"
            render={() => {
              window.location.replace(
                'https://play.google.com/store/apps/details?id=com.meiteimayek.transliterate'
              );
              return <></>;
            }}
          />
          <Route exact path="/privacy" component={PrivacyPolicy} />
          <Route exact path="/about/author" component={Author} />
          <Route exact path="/about/app" component={App} />
          <Route path="/" component={Error404} />
        </Switch>
      </Container>
      {/* <Container className={classes.footer} component="footer">
        Developed with{' '}
        <FavIcon style={{ color: 'red', position: 'relative', top: 6 }} /> by
        Gyanendro Kh
      </Container> */}
    </>
  );
};

export default Page;
