import React from 'react';
import './App.css';
import { db } from './firebase.js';
import { Grid, Typography } from '@material-ui/core';
import NameForm from './NameForm'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: `'Press Start 2P', cursive`,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
    fontSize: '4.0rem',
    color: 'white'
  },
}));

function App() {
  const classes = useStyles();
    // const [rooms, setRooms] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await db.collection("rooms").get();
  //     setRooms(data.docs.map(doc => doc.data()));
  //   }
  //   fetchData();
  // }, []);
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Typography variant="h1" className={classes.title}>
        CODENAMES
      </Typography>
      <NameForm />
    </Grid> 
  );
}

export default App;
