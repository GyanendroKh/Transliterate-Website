import React, { useEffect, useContext, useState } from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  Grid,
  Button,
  Typography,
  Paper,
  TextField,
  Box,
  Snackbar,
  IconButton,
  SnackbarContent,
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SwapHoriz, FileCopy, Close } from '@material-ui/icons';
import { MainContext } from '../context/MainContext';
import { APIContext } from '../context/APIContext';

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
    top: '-1px'
  },
  item: {
    padding: theme.spacing(2),
    wordBreak: 'break-word'
  },
  typeAction: {
    marginTop: theme.spacing(2),
    textAlign: 'right'
  },
  br: {
    [theme.breakpoints.up('md')]: {
      borderRight: '1px solid #313131'
    }
  },
  bb: {
    [theme.breakpoints.down('sm')]: {
      borderBottom: '1px solid #313131'
    }
  }
}));

const eng = 'English';
const mm = 'Meitei Mayek';
const observer = new Subject();

const Home = () => {
  const classes = useStyle();
  const { setTitle } = useContext(MainContext);
  const { api } = useContext(APIContext);
  const [state, setState] = useState(false);
  const [source, setSource] = useState([]);
  const [trans, setTrans] = useState('');
  const [sourceText, setSourceText] = useState();
  const [targetText, setTargetText] = useState();
  const [snackBarStatus, setSnackbarStatus] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setSource([]);
    setTrans('');

    setSourceText(state ? mm : eng);
    setTargetText(state ? eng : mm);
  }, [state]);

  useEffect(() => {
    observer.pipe(debounceTime(600)).subscribe(x => {
      setLoading(true);
      const string = x.string;
      const lang = x.state ? 'mm' : 'eng';
      if (string.join(' ').trim() === '') {
        return;
      }
      let url = `/api/trans?to=${lang}&source=${string.join('+')}`;
      console.log('Fetching : ' + url);
      api
        .get(url)
        .then(res => {
          setTrans(res.data.output);
        })
        .catch(_ => {
          setMessage('There has been an error... Try again');
          setSnackbarStatus(true);
          setTrans('');
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [api]);

  useEffect(() => {
    setTitle('Transliterate');
  }, [setTitle]);

  return (
    <>
      <Grid
        container
        component={Paper}
        spacing={2}
        className={classes.container}
        elevation={2}
      >
        <Grid item xs={12} style={{ borderBottom: '1px solid #313131' }}>
          <Grid container spacing={1} className={classes.langContainer}>
            <Button
              className={classes.swapBtn}
              onClick={e => {
                setState(!state);
              }}
            >
              <SwapHoriz />
            </Button>
            <Grid item xs={6} className={classes.langTitle}>
              <Typography variant="subtitle1">{sourceText}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.langTitle}>
              <Typography variant="subtitle1">{targetText}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          className={`${classes.bb} ${classes.br}`}
        >
          <Box className={classes.item}>
            <TextField
              fullWidth
              multiline
              placeholder="Type Here..."
              InputProps={{ disableUnderline: true }}
              style={{ height: 50 }}
              onChange={e => {
                let string = e.target.value.split(' ');
                if (string.length > 10) {
                  if (!snackBarStatus) {
                    setMessage('Sentence cannot be longer than 10 words.');
                    setSnackbarStatus(!snackBarStatus);
                  }
                  return;
                }

                let l = string[string.length - 1].length;
                if (l > 25) {
                  if (!snackBarStatus) {
                    setMessage('Each word should have 24 or less letters.');
                    setSnackbarStatus(!snackBarStatus);
                  }
                  return;
                }
                observer.next({ string, state });
                setSource(string);
              }}
              value={source.join(' ')}
            />
            {source.join(' ').trim() === '' ? null : (
              <Box className={classes.typeAction}>
                <Button
                  onClick={_ => {
                    navigator.clipboard.writeText(source.join(' ')).then(
                      () => {
                        if (!snackBarStatus) {
                          setMessage('Copied to clipboard...');
                          setSnackbarStatus(true);
                        }
                      },
                      () => {
                        if (!snackBarStatus) {
                          setMessage('Error Copying...');
                          setSnackbarStatus(true);
                        }
                      }
                    );
                  }}
                >
                  <FileCopy />
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.item}>
          <Box className={classes.item}>
            <Typography variant="subtitle1" style={{ height: 50 }}>
              {trans.trim() === '' ? 'Transliteration' : trans}
            </Typography>
            {isLoading ? (
              <Box className={classes.typeAction}>
                <CircularProgress color="secondary" />
              </Box>
            ) : trans.trim() === '' ? null : (
              <Box className={classes.typeAction}>
                <Button
                  onClick={_ => {
                    navigator.clipboard.writeText(trans).then(
                      () => {
                        if (!snackBarStatus) {
                          setMessage('Copied to clipboard...');
                          setSnackbarStatus(true);
                        }
                      },
                      () => {
                        if (!snackBarStatus) {
                          setMessage('Erro Copying...');
                          setSnackbarStatus(true);
                        }
                      }
                    );
                  }}
                >
                  <FileCopy />
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={snackBarStatus}
        autoHideDuration={2000}
        onClose={_ => {
          setSnackbarStatus(!snackBarStatus);
        }}
      >
        <SnackbarContent
          aria-describedby="client-snackbar"
          message={<span id="client-snackbar">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={_ => {
                setSnackbarStatus(!snackBarStatus);
              }}
            >
              <Close />
            </IconButton>
          ]}
        />
      </Snackbar>
    </>
  );
};

export default Home;
