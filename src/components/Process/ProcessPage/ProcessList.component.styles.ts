import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headers: {
            marginTop: '10px'
        },
        processesList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '6px'
        },
        processCard: {
            marginTop: '7px'
        },
        noResultTitle:{
            marginBottom: '10px'
        }
    }),
);

export { useStyles }

