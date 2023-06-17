import React from 'react';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../../../../Common1/Select/Dropdown.component';
import { Status } from "@checkout/types/dist/lib/enums/status.enum"

interface IEditSectorStatusProps {
    sectorStatusOptions: DropdownKeyPair[],
    sectorStatus: Status,
    setSectorStatus: (status: Status) => void,
    disabled: boolean
}

const EditSectorStatus: React.FC<IEditSectorStatusProps> = ({ sectorStatusOptions, sectorStatus, setSectorStatus, disabled }: IEditSectorStatusProps) => {
    function onChange(event: onChangeEvent): void {
        const status = event.target.value as Status;
        setSectorStatus(status);
    }

    return (
         <Dropdown
            defaultValue={sectorStatus}
            title= 'סטטוס:'
            data={sectorStatusOptions}
            disabled={disabled}
            onChange={onChange} />
    )
}

export default EditSectorStatus