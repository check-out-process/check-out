import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
          marginBottom: '10px'
        },
        optionRow:{
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        },
        buttonDiv:{
          display: 'flex', width: '94%'
        }
    }),
);

export {useStyles}

