import React, { useContext, useEffect } from 'react';
import { Container, Paper, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(theme => ({
  avatar: {
    width: 65,
    height: 65,
    margin: `${theme.spacing(1)}px auto`
  }
}));

const App = () => {
  const classes = useStyle();
  const { setTitle } = useContext(MainContext);

  useEffect(() => {
    setTitle('About App');
  }, [setTitle]);

  return (
    <Container style={{ marginTop: 10 }}>
      <Paper style={{ padding: 15, textAlign: 'center' }}>
        <Avatar
          alt="Avatar"
          src="https://as1.ftcdn.net/jpg/01/50/40/40/500_F_150404044_dXI2utvn6Y6PivTbWk9lbIDR0UhM4A5Y.jpg"
          className={classes.avatar}
        />
        <Typography color="textPrimary" variant="subtitle1">
          Transliterate
        </Typography>
        <Typography style={{ padding: 10 }}>
          This application is a product of boredom. Any information provided by
          thi sapplication is not official, neither it is 100% reliable.
        </Typography>
        <Typography style={{ padding: 10, textAlign: 'justify' }}>
          This web app serves as a graphical interface to a Deep Learning (a
          branch of Machine Learning) model. The model uses an approach known as
          Neural Machine Translation (NMT). The dataset I used to train the
          model was scrapped from the web. So, the dataset isn't balanced and as
          a result the model could not predict with about 85%-90% accuracy. For
          certain words which contain letters which are not used often may have
          lower accuracy.
        </Typography>
      </Paper>
    </Container>
  );
};

export default App;
