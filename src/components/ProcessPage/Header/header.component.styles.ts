import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px'
        },
        headerText: {
            flex: 1,
            fontSize: '25px',
            fontWeight: 600,
            color: '#07286B'
        },
        headerIcon: {
            padding: '0px',
            marginRight: '12px'
        }
    }),
);

export { useStyles }

