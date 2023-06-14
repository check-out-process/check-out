import React, { useEffect, useRef, useState } from 'react';
import { User, UserCreationParams } from '@checkout/types';

import { useNavigate, useParams } from 'react-router-dom';
import { createUser, editUser, getUser } from '../../services/user.service';
import UserForm from './UserForm';
import { LinearProgress } from '@material-ui/core';


export type UserCardProps = {

}

const EditUserPage: React.FC<UserCardProps> = ({ }) => {

    const [user, setUser] = useState<User>()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { userId } = useParams();


    useEffect(() => {
        setIsLoading(true)
        getUser(userId).then((user: User) => {
            setUser(user)
            setIsLoading(false)
        })
    }, [])


    const onSaveClick = async (user: UserCreationParams) => {
        const userBody: any = {
            fullname: user.fullname,
            username: user.fullname,
            phoneNumber: user.phoneNumber,
            roleId: user.roleId,
            jobId: user.jobId
        }
        return editUser(user.id, userBody);
    }

    return (
        <div>
            {isLoading ? <LinearProgress /> :
                <UserForm onSave={onSaveClick} user={user} />}

        </div>
    );

}

export default EditUserPage
