import React, { Component } from 'react';
import TodoCard from './todoCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

class Todos extends Component {
    render() {
        const useStyles = makeStyles(() => ({
            root: {
              flexGrow: 1,
            }
          }));
        return (
                <div className={useStyles.root}>
                     <Grid container spacing={3}>
                        <TodoCard />
                     </Grid>
                </div>
                );
    }
}

export default Todos;