import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, CardActions, CardContent, Card} from '@material-ui/core';
import { TODO, DONE, STARTED, DELETED } from '../constants/status';
import { DoneChip, StartedChip, TodoChip, DeletedChip, DefaultChip } from  '../constants/chips';
import { DeleteButton, DoneButton, StartButton } from  '../constants/buttons';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ListIcon from '@material-ui/icons/List';

class TodoCard extends React.Component {

    setChip(status) {
        switch(status) {
            case DONE:
                return <DoneChip icon={<CheckCircleIcon/>} size="small" label={status}/>;
            case STARTED:
                return <StartedChip icon={<PlayCircleFilledIcon/>} size="small" label={status}/>;
            case TODO:
                return <TodoChip icon={<ListIcon/>} size="small" label={status}/>;
            case DELETED:
                return <DeletedChip icon={<DeleteIcon/>} size="small" label={status}/>;
            default:
                return <DefaultChip size="small" label={status}/>;
        }

    }

    render() {
        const { todo, onDelete, onStart, onDone } = this.props;
        const classes = makeStyles({
            root: {
                minWidth: 300,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        });

        return (
        <Grid item xs={3}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {todo.title} {" "} {this.setChip(todo.status)}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="h3">
                        {todo.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeleteButton startIcon={<DeleteIcon />} onClick={() => onDelete(todo)} size="small"></DeleteButton>
                    <DoneButton startIcon={<CheckCircleIcon />} onClick={() => onDone(todo)} size="small"></DoneButton>
                    <StartButton startIcon={<PlayCircleFilledIcon />} onClick={() => onStart(todo)} size="small"></StartButton>
                </CardActions>
            </Card>
        </Grid>  
        
        );

    }
}

export default TodoCard;
