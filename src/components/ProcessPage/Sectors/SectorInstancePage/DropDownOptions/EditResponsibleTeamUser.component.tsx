import React from 'react';
import { User } from '../../../../../services/models/User';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common/Select/Dropdown.component';

interface IEditResponsibleTeamUserProps {
    resposibleTeamUserOptions: DropdownKeyPair[],
    resposibleTeamUser: User,
    setResposibleTeamUser: (user: User) => void,
    disabled: boolean
}

const EditResponsibleTeamUser: React.FC<IEditResponsibleTeamUserProps> = ({ resposibleTeamUserOptions, resposibleTeamUser, setResposibleTeamUser, disabled }: IEditResponsibleTeamUserProps) => {
    function onChange(event: onChangeEvent): void {
        const user = event.target.value as User;
        setResposibleTeamUser(user);
    }

    return (
        resposibleTeamUser && <Dropdown
            defaultValue={resposibleTeamUser}
            title='אחראי:'
            data={resposibleTeamUserOptions}
            disabled={disabled}
            onChange={onChange} />
    )
}

export default EditResponsibleTeamUser