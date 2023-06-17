import React from 'react';
import { User, UserCreationParams } from '@checkout/types';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common1/Select/Dropdown.component';

interface IEditResponsibleUserProps {
    resposibleUserOptions: DropdownKeyPair[],
    resposibleUser: User,
    setResposibleUser: (user: User) => void,
    disabled: boolean
}

const EditResponsibleUser: React.FC<IEditResponsibleUserProps> = ({ resposibleUserOptions, resposibleUser, setResposibleUser, disabled }: IEditResponsibleUserProps) => {
    function onChange(event: onChangeEvent): void {
        const user = event.target.value as User;
        setResposibleUser(user);
    }

    return (
        resposibleUser &&  <Dropdown
            defaultValue={resposibleUser}
            title='מטפל:'
            data={resposibleUserOptions}
            disabled={disabled}
            onChange={onChange} />
    )
}

export default EditResponsibleUser