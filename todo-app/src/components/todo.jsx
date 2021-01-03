import React, { Component } from 'react';
import OutlinedCard from './todoCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

class Todo extends Component {
    render() {
        const useStyles = makeStyles(() => ({
            root: {
              flexGrow: 1,
            }
          }));
        return (
                <div className={useStyles.root}>
                     <Grid container spacing={3}>
                        <OutlinedCard />
                     </Grid>
                </div>
                );
    }
}

export default Todo;