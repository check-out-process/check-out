import { Button, Modal, } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from 'react';
import { Sector } from "../../services/models/Sector";
import './SectorOptionsModal.component.css';

interface ISectorCardProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    refOffsetTop: number,
    sector: Sector,
    removeProcessSector: any
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
    top: (87 + refOffsetTop)
});

const SectorOptionsModal: React.FC<ISectorCardProps> = ({ open, setOpen, refOffsetTop, sector, removeProcessSector }: ISectorCardProps) => {

    const handleClose = () => setOpen(false);

    const handleEdit = () => {
        handleClose();
    };

    const handleRemove = () => {
        removeProcessSector(sector);
        handleClose();
    };

    return (
        open ?
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
            : null
    )
}

export default SectorOptionsModal