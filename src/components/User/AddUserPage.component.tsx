import React, { useEffect, useRef, useState } from 'react';
import { User, UserCreationParams } from '@checkout/types';

import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/user.service';
import UserForm from './UserForm';


export type UserCardProps = {

}

const AddUserPage: React.FC<UserCardProps> = ({ }) => {

    const onSaveClick = async (user: UserCreationParams) => {
        return createUser(user);
    }

    return (
        <div>
            <UserForm onSave={onSaveClick} />
        </div>
    );

}

export default AddUserPage
