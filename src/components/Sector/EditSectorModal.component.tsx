import { Modal, IconButton } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useState, useEffect, useContext } from 'react';
import { Sector } from "../../services/models/Sector";
import CloseIcon from '@material-ui/icons/Close';
import './SectorOptionsModal.component.css';
import Dropdown, { DropdownKeyPair, onChangeEvent } from "../Common/Select/Dropdown.component";
import { User } from "../../services/models/User";
import { getSectorResposibleUsers } from "../../services/Sector.service";
import { ProcessSectorsContext } from "../../context/ProcessSectorsContext";

interface IEditSectorModalProps {
    openEditModal: boolean,
    setOpenEditModal: Dispatch<SetStateAction<boolean>>
    sector: Sector,
}
const style = () => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 300,
    backgroundColor: '#c6cbd7',
    border: '2px solid #000',
    boxShadow: '24',
    pt: 2,
    px: 4,
    pb: 3,
    direction: 'rtl'
});

const EditSectorModal: React.FC<IEditSectorModalProps> = ({ openEditModal, setOpenEditModal, sector }: IEditSectorModalProps) => {
    const { changeSectorOwner } = useContext(ProcessSectorsContext);
    const [sectorOwnerOptions, setSectorOwnerOptions] = useState<DropdownKeyPair[]>();
    const [sectorOwner, setSectorOwner] = useState<User>();

    useEffect(() => {
        fetchSectorOwnerOptions();
    }, [])


    const handleClose = () => setOpenEditModal(false);

    function onChange(event: onChangeEvent): void {
        const user = event.target.value as User;

        setSectorOwner(user);
        changeSectorOwner(sector.id, user.id);
    }

    const fetchSectorOwnerOptions = () => {
        getSectorResposibleUsers(sector.id).then((owners: User[]) => {
            const data: DropdownKeyPair[] = owners.map((user: User) =>
                ({ value: user, displayName: user.name }));
            setSectorOwnerOptions(data);
            setSectorOwner(owners.find(owner => owner.id == sector.defaultResposibleUserId))
        })
    }


    return (
        openEditModal ?
            <Modal
                open={openEditModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div style={style() as React.CSSProperties}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton className="iconButton" aria-label="previous" style={{ position: 'absolute', left: 0 }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <h2 id="child-modal-title">{sector.name}</h2>
                    </div>
                    <Dropdown
                        defaultValue={sectorOwner}
                        title='בחירת אחראי'
                        data={sectorOwnerOptions}
                        disabled={false}
                        onChange={onChange} />
                </div>
            </Modal>
            : null
    )
}

export default EditSectorModal