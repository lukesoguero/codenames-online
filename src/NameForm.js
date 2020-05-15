import React from 'react';
import { Paper, Typography, Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        backgroundColor: "#505058",
        margin: theme.spacing(3),
        width: theme.spacing(58),
        height: theme.spacing(36)
    },
    button: {
        backgroundColor: "#5080FF",
        width: theme.spacing(14),
        height: theme.spacing(6)
    }
}));

const NameForm = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={4}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                spacing={5}
            >
            <Grid item>
                <Typography variant="h3">Set player name</Typography>
            </Grid>
            <Grid item>
                <TextField id="filled-basic" label="Player name" variant="filled" />
            </Grid>
            <Grid item>
                <Button className={classes.button}>Submit</Button>
            </Grid>
            </Grid>
        </Paper>
    );
}
 
export default NameForm;