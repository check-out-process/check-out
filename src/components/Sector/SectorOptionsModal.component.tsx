import { Button, Modal, } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ProcessSectorsContext } from "../../context/ProcessSectorsContext";
import { Sector } from "@checkout/types";
import EditSectorModal from "./EditSectorModal.component";
import './SectorOptionsModal.component.css';

interface ISectorCardProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    refOffsetTop: number,
    sector: Sector,
}
const style = (refOffsetTop: number) => ({
    position: 'absolute' as 'absolute',
    left: '87px',
    transform: 'translate(-50%, -50%)',
    width: 136,
    height: '88px',
    backgroundColor: '#c6cbd7',
    border: '1.5px solid #c6cbd7',
    borderRadius: '8px',
    boxShadow: '24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    top: (87 + refOffsetTop)
});

const SectorOptionsModal: React.FC<ISectorCardProps> = ({ open, setOpen, refOffsetTop, sector }: ISectorCardProps) => {
    const { removeProcessSector } = useContext(ProcessSectorsContext);
    const [openEditModal, setOpenEditModal] = useState(false);

    const handleClose = () => setOpen(false);

    const handleEdit = () => {
        setOpenEditModal(true)
    };

    const handleRemove = () => {
        removeProcessSector(sector);
        handleClose();
    };

    return (
        open ?
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">

                    <div className="sectorOptionsModal"
                        style={style(refOffsetTop) as React.CSSProperties} >
                        <Button onClick={handleEdit} >עריכה</Button>
                        <Button onClick={handleRemove}>הסרה</Button>
                    </div>
                </Modal>
                <EditSectorModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} sector={sector}/>
            </div>
            : null
    )
}

export default SectorOptionsModal