import React, { memo, useEffect, useRef, useState } from 'react';
import { Button, CircularProgress, Fab, OutlinedInput, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { User } from '../../services/models/User';
import { getUsers } from '../../services/user.service';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import UserCard from './UserCard.component';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';



const UserManagmentPage: React.FC<{}> = ({ }) => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        setLoading(true)
        getUsers().then((users: User[]) => {
            setUsers(users)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            enqueueSnackbar('קרתה שגיאה במהלך נסיון לשלוף את כל המחלקות', { variant: 'error' })
        })
    }

    const onAddUserClick = () => {
        navigate('/managment/users/create-user');
    }

    return (
        <div>
            <Typography style={{ marginTop: '10px' }} align='center' variant="h6" component="div">ניהול יוזרים</Typography>

            {loading ? <CircularProgress disableShrink /> : null}
            {users.length > 0 ?
                <FixedSizeList direction='rtl' height={460} width='98%' itemSize={55} itemCount={users.length}>
                    {memo((props: ListChildComponentProps) => {
                        const { index, style } = props;
                        return (
                            <div key={index} style={{ ...style }}>
                                <UserCard user={users[index]} />
                            </div>
                        );
                    })}
                </FixedSizeList> : null}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', bottom: 5, left: 5, position: 'absolute', width: '95%' }}>
                <Fab onClick={onAddUserClick} color="secondary">
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );

}

export default UserManagmentPage
