import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './components/navbar';
import TodoForm from './components/todoForm';
import Todos from './components/todos';
import { makeStyles } from '@material-ui/core/styles';


class App extends Component {

    

    render() {
        const useStyles = makeStyles(() => ({
            root: {
              flexGrow: 1,
            },
        }));
        return(
            <>
                <Navbar />
                <br />
                <div className={useStyles.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TodoForm />    
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Todos />    
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }

}

export default App;