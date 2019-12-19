import React, { useContext, useEffect } from 'react';
import { Container, Paper, Avatar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(theme => ({
  avatar: {
    width: 65,
    height: 65,
    margin: `${theme.spacing(1)}px auto`
  }
}));

const Author = () => {
  const classes = useStyle();
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('About Author');
  }, [setTitle]);

  return (
    <Container style={{ marginTop: 10 }}>
      <Paper style={{ padding: 15, textAlign: 'center' }}>
        <Avatar
          alt="Avatar"
          src="https://gyanendrokh.github.io/static/media/me-150.09052cfa.webp"
          className={classes.avatar}
        />
        <Link
          href="https://gyanendrokh.github.io"
          color="textPrimary"
          variant="subtitle1"
          rel="noopener"
          target="_blank"
        >
          Gyanendro Kh
        </Link>
        <Typography style={{ padding: 20 }}>
          A student who just loves to code and learn technology. <br />
          Click the name above to know more about me
        </Typography>
      </Paper>
    </Container>
  );
};

export default Author;
