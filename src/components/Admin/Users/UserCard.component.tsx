import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, CardContent, Fab, IconButton, OutlinedInput, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { User } from '../../../services/models/User';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';



export type UserCardProps = {
    user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/managment/users/${user.id}`, { replace: true });
    }

    return (
        <div>
            <Card onClick={onClick} style={{ height: '45px', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '5px 20px 15px 10px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px' }}>
                    <Typography component="div" variant="h5" style={{ fontSize: '16px', marginRight: '15px' }}>
                        {user.fullname}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}

export default UserCard
