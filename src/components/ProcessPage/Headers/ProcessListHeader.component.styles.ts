import { Theme, createStyles, makeStyles } from "@material-ui/core";
import { Colors } from '../../../style/colors/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginBottom: '10px'
    },
    optionRow: {
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    buttonDiv: {
      display: 'flex', width: '94%'
    },
    button: {
      height: '34px', width: '120px', marginLeft: '10px', backgroundColor: Colors.buttonPrimaryBackgroundColor
    }
  }),
);

export { useStyles }

