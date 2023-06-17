import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        },
        card: {
            width: '95%', borderRadius: '8px'
        },
        cardContent: {
             display: 'flex', justifyContent: 'space-between', padding: '16px 16px 4px 16px'
        },
        rightDescription: {
            width: '50%', marginTop: '-10px'
        },
        leftDescription: {
            width: '50%', marginRight: '15px', marginTop: '-10px'
        },
        devider: {
            marginTop: '5px'
        },
        cardActions: {
            justifyContent: 'space-between', marginTop: '-4px', height: '15px'
        }
    }),
);

export { useStyles }

