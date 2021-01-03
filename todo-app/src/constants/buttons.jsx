import { withStyles } from '@material-ui/core/styles';
import { green, red, blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

export const DeleteButton = withStyles({
    root: {
        color: red[300],
        padding: '6px 12px',
        lineHeight: 1.5,
    },
})(Button);


export const StartButton = withStyles({
    root: {
        color: green[300],
        padding: '6px 12px',
        lineHeight: 1.5,
    },
})(Button);


export const DoneButton = withStyles({
    root: {
        color: blue[300],
        padding: '6px 12px',
        lineHeight: 1.5,
    },
})(Button);