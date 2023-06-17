import { Modal, IconButton } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useState, useEffect, useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './SectorOptionsModal.component.css';
import Dropdown, { DropdownKeyPair, onChangeEvent } from "../Common1/Select/Dropdown.component";
import { User, Sector } from '@checkout/types';
import { ProcessSectorsContext } from "../../context/ProcessSectorsContext";
import BaseSectorModal from "../Common1/Sector/Modal/BaseSectorModal.component";

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