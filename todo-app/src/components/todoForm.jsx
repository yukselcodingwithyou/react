import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
        margin: theme.spacing(1),
    },
    grid: {
        flexGrow: 1,
    }

  },
}));

export default function TodoForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div className={useStyles.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={3} sm={3}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Description"
                                placeholder="Description"
                                multiline
                                rowsMax={4}
                                value={value}
                                onChange={handleChange}
                                />  
                        </Grid>
                        <Grid item xs={3} sm={3}>
                                <TextField
                                    id="standard-textarea"
                                    label="Title"
                                    placeholder="Title"
                                    multiline
                                />
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <Button  variant="contained"
                                 color="primary"
                                 type="submit"
                                 className={classes.button}
                                 startIcon={<AddIcon />}>Add</Button>
                        </Grid>
                    </Grid>
        </div>
    </form>
  );
}