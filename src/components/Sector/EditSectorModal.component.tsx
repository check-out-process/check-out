import React, { Dispatch, SetStateAction } from 'react';
import './SectorOptionsModal.component.css';
import { Sector } from '@checkout/types';
import BaseSectorModal from "../Common/Sector/Modal/BaseSectorModal.component";

interface IEditSectorModalProps {
    openEditModal: boolean,
    setOpenEditModal: Dispatch<SetStateAction<boolean>>
    sector: Sector,
}

const EditSectorModal: React.FC<IEditSectorModalProps> = ({ openEditModal, setOpenEditModal, sector }: IEditSectorModalProps) => {

    return (
        <BaseSectorModal openModal={openEditModal} setOpenModal={setOpenEditModal} sector={sector}/>
    )
}

export default EditSectorModal