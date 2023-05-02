import { Theme, createStyles, makeStyles } from "@material-ui/core";

const drawerWidth = 240;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#ECF0F1',
            // top: '3.5em'

        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        filters: {
            marginTop: '5px' 
        }
    }),
);

export {useStyles}

