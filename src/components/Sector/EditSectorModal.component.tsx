import { Modal, IconButton } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useState, useEffect, useContext } from 'react';
import { Sector } from "../../services/models/Sector";
import CloseIcon from '@material-ui/icons/Close';
import './SectorOptionsModal.component.css';
import Dropdown, { DropdownKeyPair, onChangeEvent } from "../Common/Select/Dropdown.component";
import { User } from "../../services/models/User";
import { ProcessSectorsContext } from "../../context/ProcessSectorsContext";
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