import { Modal, IconButton } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './SectorOptionsModal.component.css';

interface IEditSectorModalProps {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    sectorName: string
    modalHeight?: number,
    modalWidth?: number,
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

const BaseSectorModal: React.FC<IEditSectorModalProps> = ({ openModal, setOpenModal, sectorName }: IEditSectorModalProps) => {

    useEffect(() => {
    }, [])

    const handleClose = () => setOpenModal(false);

    return (
        openModal ?
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div style={style() as React.CSSProperties}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton className="iconButton" aria-label="previous" style={{ position: 'absolute', left: 0 }} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <h2 id="child-modal-title">{sectorName}</h2>
                    </div>
                    //body
                </div>
            </Modal>
            : null
    )
}

export default BaseSectorModal