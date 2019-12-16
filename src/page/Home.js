import React, { useEffect, useContext, useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Paper,
  TextField,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SwapHoriz, FileCopy } from '@material-ui/icons';
import { MainContext } from '../context/MainContext';

const useStyle = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    borderRadius: 5
  },
  langContainer: {
    position: 'relative'
  },
  langTitle: {
    textAlign: 'center'
  },
  swapBtn: {
    position: 'absolute',
    left: 'calc((100% / 2) - (64px / 2))',
    top: '-2.5px'
  },
  item: {
    padding: theme.spacing(2),
    wordBreak: 'break-word'
  },
  typeAction: {
    marginTop: theme.spacing(2),
    textAlign: 'right'
  }
}));

const Home = () => {
  const classes = useStyle();
  const { setTitle } = useContext(MainContext);
  const [source, setSource] = useState([]);
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    setTitle('Transliterate');
  }, [setTitle]);

  return (
    <Grid
      container
      component={Paper}
      spacing={2}
      className={classes.container}
      elevation={2}
    >
      <Grid
        item
        xs={12}
        style={{
          borderBottom: '1px solid #313131'
        }}
      >
        <Grid container spacing={1} className={classes.langContainer}>
          <Button className={classes.swapBtn}>
            <SwapHoriz />
          </Button>
          <Grid item xs={6} className={classes.langTitle}>
            <Typography>English</Typography>
          </Grid>
          <Grid item xs={6} className={classes.langTitle}>
            <Typography>Meitei Mayek</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{
          borderRight: '1px solid #313131',
          borderBottom: '1px solid #313131'
        }}
      >
        <Box className={classes.item}>
          <TextField
            fullWidth
            multiline
            placeholder="Type Here..."
            InputProps={{ disableUnderline: true }}
            onChange={e => {
              let string = e.target.value;
              setSource(string);
              setTrans(string);
            }}
            value={source}
          />
          <Box className={classes.typeAction}>
            <Typography variant="caption">
              Each word should be less than 25 characters.
            </Typography>
            <Button>
              <FileCopy />
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <Box className={classes.item}>
          <Typography variant="subtitle1">
            {trans.length === 0 ? 'Transliteration' : trans}
          </Typography>
          <Box className={classes.typeAction}>
            <Button>
              <FileCopy />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
