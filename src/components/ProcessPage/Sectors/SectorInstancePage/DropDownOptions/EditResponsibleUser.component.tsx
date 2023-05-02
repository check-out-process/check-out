import React from 'react';
import { User } from '../../../../../services/models/User';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common/Select/Dropdown.component';

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