import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px'
    },
    headerText: {
        flex: 1
    },
    headerIcon: {
        padding: '0px',
        marginLeft: '12px'
    }
}),
);

export { useStyles }

