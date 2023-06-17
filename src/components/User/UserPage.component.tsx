import React, { useContext, useEffect , useState } from 'react';
import { Button, CircularProgress, Divider, IconButton, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { deleteUser, getUser } from '../../services/user.service';
import { useNavigate, useParams } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import UserLogo from '../../style/images/userLogo.png';
import Paper from '@material-ui/core/Paper';
import BaseModal from '../Common/Modal/BaseModal.component';
import { User } from '@checkout/types';
import { Role } from '@checkout/types/dist/lib/enums/role.enum';
import { UserContext } from '../../context/UserContext';
import { Colors } from '../../style/colors/color';
import { useSnackbar } from 'notistack';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        systemLogo: {
            width: '150px',
            height: '150px'
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
            backgroundColor: Colors.buttonPrimaryBackgroundColor
        },
        continueButton: {
            marginRight: '1%',
            textAlign: 'center',
            width: '45%',
            backgroundColor: '#de4343'
        },
    }),
);

const marginTop: string = '10px'


const UserPage: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User>()
    const [openDeleteConfirmiation, setOpenDeleteConfirmiation] = useState<boolean>()
    const { userId } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();



    const onBackClick = () => {
        navigate('/managment/users');
    }

    const onDeleteClick = () => {
        setOpenDeleteConfirmiation(true)
    }

    const onDeleteSave = (confirm: boolean) => {
        if (confirm) {
            deleteUser(currentUser.id).then(res => {
                enqueueSnackbar('יוזר נמחק בהצלחה', { variant: 'success' })
                navigate(`/managment/users`);
            }).catch(err => {
                enqueueSnackbar('מחיקת יוזר נכשלה, אנא נסה שוב', { variant: 'error' })
            })
            
        } else {
            setOpenDeleteConfirmiation(false)
        }
    }


    const onEditClick = () => {
        navigate(`/managment/users/${currentUser.id}/edit`);
    }


    useEffect(() => {
        setIsLoading(true)
        getUser(userId).then((user: User) => {
            setCurrentUser(user)
            setIsLoading(false);
        })
    }, [])


    return (
        <div>
            {isLoading ? <CircularProgress style={{ marginTop: '50%' }} /> :
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
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">שם מלא: {currentUser?.fullname}</Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">מספר פלאפון: {currentUser?.phoneNumber}</Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">תפקיד: {currentUser?.job?.name}</Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop, height: '40px' }} align='right' variant="subtitle1" component="div">סוג הרשאה: {currentUser?.role?.name}</Typography>
                        </Paper>

                    </div>
                    {user && user.role.name === Role.Admin && <div className={classes.buttonRoot}>
                        <Button className={classes.cancelButton} onClick={onEditClick} variant="contained" color="primary">עדכון</Button>
                        <Button className={classes.continueButton} onClick={onDeleteClick} variant="contained" color="secondary">מחיקה</Button>
                    </div>}
                    {openDeleteConfirmiation ? <BaseModal open={openDeleteConfirmiation} setOpen={onDeleteSave} title="? האם ברצונך למחוק משתמש זה" /> : null}
                </div>}

        </div>
    );
}

export default UserPage
