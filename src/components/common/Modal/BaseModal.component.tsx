import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Modal } from '@material-ui/core';

const useStyles = makeStyles({
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        '@media (min-width: 350px)':{
            width: '400px'
        },
        '@media (max-width: 350px)':{
            width: '70%'
        },
    },
    buttons: {
        width:'50%'
    },
    buttonsContainer: {
        display:'flex',
        justifyContent:'center'
    }
});

export type BaseModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void
}

const BaseModal: React.FC<BaseModalProps> = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleConfirm = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                open={open}
                className={classes.modal}
                onClose={handleClose}
            >
                <Card className={classes.content}>

                    <CardContent>
                        <Typography align="center" variant="body2" color="textSecondary" component="p">
                          ? האם ברצונך לבטל את יצירת התהליך 
                        </Typography>
                    </CardContent>

                    <CardActions className={classes.buttonsContainer}>
                        <Button className={classes.buttons} variant="contained" color="primary" onClick={handleConfirm}>
                            כן
                        </Button>
                        <Button className={classes.buttons} variant="contained" color="primary" onClick={handleClose}>
                            לא
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </div>
    );
}

export default BaseModal;
