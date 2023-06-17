import React from 'react';
import { UserCreationParams } from '@checkout/types';
import { createUser } from '../../services/user.service';
import UserForm from './UserForm';


const AddUserPage: React.FC = () => {

    const onSaveClick = async (user: UserCreationParams) => {
        return createUser(user)
    }

    return (
        <div>
            <UserForm onSave={onSaveClick} />
        </div>
    );

}

export default AddUserPage
