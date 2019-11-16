import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { NavLink as Link } from 'react-router-dom';
import {
  Drawer,
  Container,
  List,
  ListItem,
  Paper,
  Avatar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(theme => ({
  container: {
    width: theme.spacing(45),
    marginTop: theme.spacing(5)
  },
  paper: {
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  avatar: {
    width: 55,
    height: 55,
    margin: theme.spacing(1)
  }
}));

const LinkListItem = withRouter(props => {
  const { location, children, staticContext, ...rest } = props;
  const { sideBarState, setSideBarState } = useContext(MainContext);

  let isSame = location.pathname === props.to;

  return (
    <ListItem
      button
      selected={isSame}
      component={Link}
      onClick={e => {
        if (isSame) e.preventDefault();
        setSideBarState(!sideBarState);
      }}
      {...rest}
    >
      {children}
    </ListItem>
  );
});

const SideBar = () => {
  const classes = useStyle();
  const { sideBarState, setSideBarState } = useContext(MainContext);

  return (
    <Drawer open={sideBarState} onClose={() => setSideBarState(!sideBarState)}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Avatar
            alt="Avatar"
            src="https://as1.ftcdn.net/jpg/01/50/40/40/500_F_150404044_dXI2utvn6Y6PivTbWk9lbIDR0UhM4A5Y.jpg"
            className={classes.avatar}
          />
          <Typography variant="subtitle1">Transliterate</Typography>
          <Typography variant="subtitle2">Meitei Mayek</Typography>
        </Paper>
        <List component="nav">
          <LinkListItem to="/">Home</LinkListItem>
          <LinkListItem to="/about">About</LinkListItem>
        </List>
      </Container>
    </Drawer>
  );
};

export default SideBar;
