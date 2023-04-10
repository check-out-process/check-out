import React from 'react';
import CheckOutLogo from '../../style/images/checkOutLogo.png';
import { createStyles, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() =>
    createStyles({
        homaPageContainer: {
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        systemLogo: {
            width: '250px',
            height: '250px'
        },
        systemName: {
            marginTop: '-33px',
            fontSize: '35px',
            fontWeight: 500
        }
    }),
);

const HomePage: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.homaPageContainer}>
            <img src={CheckOutLogo} className={classes.systemLogo} />
            <p className={classes.systemName}>check out</p>
        </div >
    )
}

export default HomePage