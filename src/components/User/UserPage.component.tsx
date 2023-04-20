import React, { useEffect, useRef, useState } from 'react';
import { Button, Divider, IconButton, OutlinedInput, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { User } from '../../services/models/User';
import { deleteUser, getUser } from '../../services/user.service';
import { useNavigate, useParams } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import UserLogo from '../../style/images/userLogo.png';
import Paper from '@material-ui/core/Paper';
import BaseModal from '../Common/Modal/BaseModal.component';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        systemLogo: {
            width: '200px',
            height: '200px'
        },
        buttonRoot: {
            marginRight: '1%',
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'center'
        },
        cancelButton: {
            textAlign: 'center',
            width: '45%',
        },
        continueButton: {
            marginRight: '1%',
            textAlign: 'center',
            width: '45%',
        },
    }),
);

const marginTop: string = '10px'

export type UserPageProps = {
}

const UserPage: React.FC<UserPageProps> = ({ }) => {
    const [user, setUser] = useState<User>()
    const [openDeleteConfirmiation, setOpenDeleteConfirmiation] = useState<boolean>()
    const { userId } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate('/managment/users');
    }

    const onDeleteClick = () => {
        setOpenDeleteConfirmiation(true)
    }

    const onDeleteSave = (confirm: boolean) => {
        if (confirm){
            deleteUser(user.id)
        }else{
            setOpenDeleteConfirmiation(false)
        }
    }


    const onEditClick = () => {
        
    }


    useEffect(() => {
        getUser(userId).then((user: User) => {
            setUser(user)
        })
    }, [])

    const getJobName = () => {
        return 'מנקה'
    }

    const getUserRole = () => {
        return 'אדמין'
    }

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton onClick={onBackClick}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className={classes.systemLogo} src={UserLogo} alt='' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <Paper elevation={3} style={{ width: '95%', borderRadius: '20px' }}>
                    <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">שם מלא: {user?.fullname}</Typography>
                    <Divider variant="middle" style={{ marginTop: marginTop }} />
                    <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">שם משתמש: {user?.username}</Typography>
                    <Divider variant="middle" style={{ marginTop: marginTop }} />
                    <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">תפקיד: {getJobName()}</Typography>
                    <Divider variant="middle" style={{ marginTop: marginTop }} />
                    <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">מספר פלאפון: {getJobName()}</Typography>
                    <Divider variant="middle" style={{ marginTop: marginTop }} />
                    <Typography style={{ marginRight: '15px', marginTop: marginTop, height: '40px' }} align='right' variant="subtitle1" component="div">סוג הרשאה: {getUserRole()}</Typography>
                </Paper>

            </div>
            <div className={classes.buttonRoot}>
                <Button className={classes.cancelButton} variant="contained" color="primary">עדכון</Button>
                <Button className={classes.continueButton} onClick={onDeleteClick} variant="contained" color="secondary">מחיקה</Button>
            </div>
            {openDeleteConfirmiation ? <BaseModal open={openDeleteConfirmiation} setOpen={onDeleteSave} title="? האם ברצונך למחוק משתמש זה" /> : null}

        </div>
    );
}

export default UserPage
