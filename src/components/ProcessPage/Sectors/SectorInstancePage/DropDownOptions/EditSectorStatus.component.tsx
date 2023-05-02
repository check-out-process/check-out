import React from 'react';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common/Select/Dropdown.component';
import { Status } from '../../../../../services/models/Status';

interface IEditSectorStatusProps {
    sectorStatusOptions: DropdownKeyPair[],
    sectorStatus: Status,
    setSectorStatus: (status: Status) => void
}

const EditSectorStatus: React.FC<IEditSectorStatusProps> = ({ sectorStatusOptions, sectorStatus, setSectorStatus }: IEditSectorStatusProps) => {
    function onChange(event: onChangeEvent): void {
        const status = event.target.value as Status;
        setSectorStatus(status);
    }

    return (
         <Dropdown
            defaultValue={sectorStatus}
            title='עדכון סטטוס'
            data={sectorStatusOptions}
            disabled={false}
            onChange={onChange} />
    )
}

export default EditSectorStatus