import React, { useEffect, useState } from 'react';
import { create } from "jss";
import rtl from "jss-rtl";
import { Button, Divider, IconButton, OutlinedInput, Paper, TextField } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Job, RoleDTO, User, UserCreationParams } from '@checkout/types';
import { useNavigate } from 'react-router-dom';
import UserLogo from '../../style/images/userLogo.png';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    StylesProvider,
    jssPreset,
    ThemeProvider,
    createTheme
} from "@material-ui/core/styles";
import BaseModal from '../Common/Modal/BaseModal.component';
import { enqueueSnackbar } from 'notistack';
import { getJobs } from '../../services/Job.service';
import { getRoles } from '../../services/Role.service';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import { getUsers } from '../../services/user.service';



const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const rtlTheme = createTheme({ direction: "rtl" });

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        systemLogo: {
            width: '100px',
            height: '100px'
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
        title: {
            marginRight: '1%',
            display: 'flex',
            justifyContent: 'flex-start'
        },
        select: {
            borderRadius: '6px',
            direction: "rtl",
            height: '20%',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '10px',
            marginTop: '10px',
            width: '95%'
        },
        option: {
            height: '10%',
            justifyContent: 'flex-end'
        },
        optionDisplay: {
            direction: 'rtl',
            justifyContent: 'flex-end',
            textAlign: 'right'
        },
        input: {
            height: '10%'
        }
    }),
);
const marginTop: string = '5px'


export type UserCardProps = {
    onSave: (user: UserCreationParams) => Promise<User>
    user?: User
}

const UserForm: React.FC<UserCardProps> = ({ onSave, user }) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [openConfirmiation, setOpenConfirmiation] = useState<boolean>()
    const [id, setId] = useState<number>()
    const [fullName, setFullName] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [jobs, setJobs] = useState<Job[]>([])
    const [roles, setRoles] = useState<RoleDTO[]>([])
    const [job, setJob] = useState<string>()
    const [role, setRole] = useState<string>()

    useEffect(() => {
        getJobs().then((jobs: Job[]) => {
            setJobs(jobs)
        })
        getRoles().then((roles: RoleDTO[]) => {
            setRoles(roles)
        })
    }, [])

    useEffect(() => {
        if (user) {
            setId(user.id)
            setFullName(user.fullname)
            setPhoneNumber(user.phoneNumber)
            setJob(user.job.id)
            setRole(user.role.id)
        }
    }, [user])


    const onBackClick = () => {
        navigate('/managment/users');
    }

    const onSaveClick = (confirm: boolean) => {
        if (confirm) {
            let userBody: any = {
                fullname: fullName,
                username: fullName,
                password: password,
                phoneNumber: phoneNumber,
                roleId: role,
                jobId: job
            }
            if (user){
                userBody.id = user.id
                sendUser(userBody)
            }
            else{
                getUsers().then((users: User[]) => {
                    const maxUserId: number =  Math.max(...users.map(user => user.id))
                    userBody.id = maxUserId + 1
                    sendUser(userBody)
                })
            }
            

        } else {
            setOpenConfirmiation(false)
        }
    }

    const sendUser = (user: any) => {
        onSave(user).then((user: User) => {
            navigate(`/managment/users`);
            enqueueSnackbar('משתמש נוצר בהצלחה', { variant: 'success' })
        }).catch(err => {
            enqueueSnackbar('קרתה שגיאה במהלך הכנסת יוזרת אנא נסה שוב', { variant: 'error' })
        })
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
                                <TextField
                                    value={fullName || ''}
                                    onChange={(event: any) => { setFullName(event.target.value) }}
                                    variant="outlined"
                                    label="שם מלא"
                                    style={{ marginRight: '10px', marginTop: '10px', width: '95%' }}
                                    size='small' placeholder="הכנס שם מלא" />
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex', marginBottom: '10px' }}>
                                <TextField
                                    value={phoneNumber || ''}
                                    size='small'
                                    onChange={(event: any) => { setPhoneNumber(event.target.value) }}
                                    variant="outlined"
                                    label="מספר פלאפון" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }}
                                    placeholder="הכנס מספר פלאפון" />
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            {!user &&
                                <div style={{ flexDirection: 'row', justifyContent: 'flex-start', display: 'flex', marginBottom: '10px' }}>
                                    <TextField
                                        value={password || ''}
                                        size='small'
                                        onChange={(event: any) => { setPassword(event.target.value) }}
                                        variant="outlined"
                                        label="סיסמא" style={{ marginRight: '10px', marginTop: '10px', width: '95%' }}
                                        placeholder="הכנס סיסמא" />
                                </div>
                            }
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <div style={{ marginBottom: '10px' }}>
                                <FormControl fullWidth variant="filled">

                                    <Select
                                        value={job ? job : 'None'}
                                        defaultValue={job ? job : 'None'}

                                        className={classes.select}
                                        onChange={(event: any) => {
                                            setJob(event.target.value)
                                        }}
                                        input={<OutlinedInput margin='dense' classes={{ input: classes.input }} />}
                                    >
                                        <MenuItem className={classes.option} key={-1} value='None'>
                                            <div className={classes.optionDisplay}>בחירת סוג עבודה</div>
                                        </MenuItem>
                                        {jobs.map((job: Job, index) => {
                                            return (
                                                <MenuItem className={classes.option} key={index} value={job.id}>
                                                    <div className={classes.optionDisplay}>{job.name}</div>
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />

                            <div style={{ marginBottom: '10px' }}>
                                <FormControl fullWidth variant="filled">

                                    <Select
                                        value={role ? role : 'None'}
                                        defaultValue={role ? role : 'None'}

                                        className={classes.select}
                                        onChange={(event: any) => {
                                            setRole(event.target.value)
                                        }}
                                        input={<OutlinedInput margin='dense' classes={{ input: classes.input }} />}
                                    >
                                        <MenuItem className={classes.option} key={-1} value='None'>
                                            <div className={classes.optionDisplay}>בחירת סוג השראה</div>
                                        </MenuItem>
                                        {roles.map((role: RoleDTO, index: number) => {
                                            return (
                                                <MenuItem className={classes.option} key={index} value={role.id}>
                                                    <div className={classes.optionDisplay}>{role.name}</div>
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
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
