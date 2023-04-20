import React, { useEffect, useRef, useState } from 'react';
import { User } from '../../services/models/User';

import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/user.service';
import UserForm from './UserForm';


export type UserCardProps = {

}

const AddUserPage: React.FC<UserCardProps> = ({ }) => {

    const onSaveClick = async (user: User) => {
        return createUser(user);
    }

    return (
        <div>
            <UserForm onSave={onSaveClick} />
        </div>
    );

}

export default AddUserPage
