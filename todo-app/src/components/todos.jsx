import React, { Component } from 'react';
import TodoCard from './todoCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TODO, DONE, STARTED, DELETED } from '../constants/status';

class Todos extends Component {


    state = {
      todos : [
        {id: 0, title: "title 1", status: TODO, description: "description 1"},
        {id: 1, title: "title 2", status: DONE, description: "description 2"},
      ]
    }

    handleDelete = todo => {
      let todos = [...this.state.todos]
      const index = todos.indexOf(todo);
      todos[index].status = DELETED;
      this.setState({todos : todos});
    }

    handleStart = todo => {
      let todos = [...this.state.todos]
      const index = todos.indexOf(todo);
      if(todos[index].status === TODO || todos[index].status === DELETED)
        todos[index].status = STARTED;
      this.setState({todos : todos});

    }

    handleDone = todo => {
      let todos = [...this.state.todos]
      const index = todos.indexOf(todo);
      if(todos[index].status === STARTED)
        todos[index].status = DONE;
      this.setState({todos : todos});
    }

    render() {
        const useStyles = makeStyles(() => ({
            root: {
              flexGrow: 1,
            },
          }));
        return (
                <div className={useStyles.root}>
                     <Grid container spacing={3}>
                        {this.state.todos.map(todo => <TodoCard key={todo.id}
                                                                todo={todo} 
                                                                onDelete={this.handleDelete}
                                                                onStart={this.handleStart}
                                                                onDone={this.handleDone}/>)
                        }
                     </Grid>
                </div>
              );
    }
}

export default Todos;