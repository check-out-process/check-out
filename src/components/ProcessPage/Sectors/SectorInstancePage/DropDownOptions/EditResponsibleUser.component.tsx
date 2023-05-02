import React from 'react';
import { User } from '../../../../../services/models/User';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common/Select/Dropdown.component';

interface IEditResponsibleUserProps {
    resposibleUserOptions: DropdownKeyPair[],
    resposibleUser: User,
    setResposibleUser: (user: User) => void
}

const EditResponsibleUser: React.FC<IEditResponsibleUserProps> = ({ resposibleUserOptions, resposibleUser, setResposibleUser }: IEditResponsibleUserProps) => {
    function onChange(event: onChangeEvent): void {
        const user = event.target.value as User;
        setResposibleUser(user);
    }

    return (
        resposibleUser &&  <Dropdown
            defaultValue={resposibleUser}
            title='בחירת מטפל'
            data={resposibleUserOptions}
            disabled={false}
            onChange={onChange} />
    )
}

export default EditResponsibleUser