import React, { useEffect, useRef, useState } from 'react';
import { create } from "jss";
import rtl from "jss-rtl";
import { Button, Card, CardContent, Divider, Fab, IconButton, OutlinedInput, Paper, TextField, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { User } from '../../services/models/User';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import UserLogo from '../../style/images/userLogo.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    StylesProvider,
    jssPreset,
    ThemeProvider,
    createTheme
} from "@material-ui/core/styles";
import BaseModal from '../Common/Modal/BaseModal.component';
import { createUser } from '../../services/user.service';
import { enqueueSnackbar } from 'notistack';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const rtlTheme = createTheme({ direction: "rtl" });

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
            width: '93%',
            marginTop: '10px'
        },
    }),
);
const marginTop: string = '10px'


export type UserCardProps = {
    onSave: (user: User) => Promise<User>
}

const UserForm: React.FC<UserCardProps> = ({ onSave }) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [openConfirmiation, setOpenConfirmiation] = useState<boolean>()
    const [id, setId] = useState<number>()
    const [fullName, setFullName] = useState<string>()
    const [username, setUsername] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()



    const onBackClick = () => {
        navigate('/managment/users');
    }

    const onSaveClick = (confirm: boolean) => {
        if (confirm) {
            const user: User = {
                id: id,
                fullname: fullName,
                username: username,
                name: fullName
            }
            console.log(user)

            onSave(user).then((user: User) => {
                navigate(`/managment/users`, { replace: true });
                enqueueSnackbar('משתמש נוצר בהצלחה', { variant: 'success' })
            }).catch(err => {
                enqueueSnackbar('קרתה שגיאה במהלך הכנסת יוזרת אנא נסה שוב', { variant: 'error' })
            })

        } else {
            setOpenConfirmiation(false)
        }
    }


    return (
        <div>
            <StylesProvider jss={jss}>
                <ThemeProvider theme={rtlTheme}>

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
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex' }}>
                                <TextField onChange={(event: any) => { setFullName(event.target.value) }} variant="outlined" label="שם מלא" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }} placeholder="הכנס שם מלא" />
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex' }}>
                                <TextField onChange={(event: any) => { setId(event.target.value) }} variant="outlined" label="תעודת זהות" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }} placeholder="הכנס תעודת זהות" />
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex' }}>
                                <TextField onChange={(event: any) => { setUsername(event.target.value) }} variant="outlined" label="שם משתמש" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }} placeholder="הכנס שם משתמש" />
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex', marginBottom: '10px' }}>
                                <TextField onChange={(event: any) => { setPhoneNumber(event.target.value) }} variant="outlined" label="מספר פלאפון" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }} placeholder="הכנס מספר פלאפון" />
                            </div>

                        </Paper>
                    </div>
                    <Button className={classes.cancelButton} onClick={() => { setOpenConfirmiation(true) }} variant="contained" color="primary">שמירה</Button>
                    {openConfirmiation ? <BaseModal open={openConfirmiation} setOpen={onSaveClick} title="? האם ברצונך למחוק משתמש זה" /> : null}

                </ThemeProvider>

            </StylesProvider>
        </div>
    );

}

export default UserForm
