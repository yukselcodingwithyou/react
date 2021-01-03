import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';






class TodoCard extends React.Component {
    render() {
        const classes = makeStyles({
            root: {
                minWidth: 275,
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
                        Todo title
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    todo status span
                    </Typography>
                    <Typography variant="body2" component="p">
                        todo description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Delete</Button>
                    <Button size="small">Done</Button>
                </CardActions>
            </Card>
        </Grid>  
        
        );

    }
}

export default TodoCard;
