
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';

import { StepConnector } from '@material-ui/core';


const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor: 'blue',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: 'blue',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: 'gray',
        borderRadius: 1
    },
})(StepConnector);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '@media (max-width: 500px)': {
                width: '100%',

            }
        },
        buttonRoot: {
            marginRight: '1%',
            display: 'flex',
            marginTop: '3%',
            justifyContent: 'center'
        },
        cancelButton: {
            textAlign: 'center',
            '@media (min-width: 500px)': {
                width: '20%',
            },
            '@media (max-width: 500px)': {
                width: '50%',
            }
        },
        continueButton: {
            marginRight: '1%',
            textAlign: 'center',
            '@media (min-width: 500px)': {
                width: '20%',
            },
            '@media (max-width: 500px)': {
                width: '50%',
            }
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        stepper: {
            backgroundColor: "transparent",
            width: "40%",
            '@media (max-width: 500px)': {
                width: '90%',
            }
        }
    }),
);

export {useStyles,ColorlibConnector}