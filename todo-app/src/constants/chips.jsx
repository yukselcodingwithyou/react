import { withStyles } from '@material-ui/core/styles';
import { green, purple, red, blue } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';


export const TodoChip = withStyles(() => ({
    root: {
        backgroundColor: purple[100]
      }
}))(Chip);

export const StartedChip = withStyles(() => ({
    root: {
        backgroundColor: green[300]
      }
}))(Chip);

export const DeletedChip = withStyles(() => ({
    root: {
        backgroundColor: red[400]
      }
}))(Chip);


export const DoneChip = withStyles(() => ({
    root: {
        backgroundColor: blue[100]
      }
}))(Chip);


export const DefaultChip = withStyles(() => ({
    root: {
        backgroundColor: blue[700]
      }
}))(Chip);





