import { Modal, IconButton } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import SectorModalBody from "./SectorModalBody.component";
import { Sector } from "@checkout/types";

interface IEditSectorModalProps {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    sector: Sector,
    modalHeight?: string,
    modalWidth?: string,
}

export interface StyleProps {
    height: string;
    width: string;
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
    createStyles({
        sectorModal: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: ({ width }) => width,
            height: ({ height }) => height,
            backgroundColor: '#c6cbd7',
            border: '2px solid #000',
            boxShadow: '24',
            pt: 2,
            px: 4,
            pb: 3,
            direction: 'rtl'
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        closeIcon: {
            position: 'absolute',
            left: 0
        },
    }),
);


const BaseSectorModal: React.FC<IEditSectorModalProps> = ({ openModal, setOpenModal, sector, modalHeight, modalWidth }: IEditSectorModalProps) => {
    const classes = useStyles({ height: modalHeight ?? "50%", width: modalWidth ?? "80%" });

    const handleClose = () => setOpenModal(false);

    return (
        openModal ?
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div className={classes.sectorModal}>
                    <div className={classes.header}>
                        <IconButton aria-label="previous" className={classes.closeIcon} onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        <h2 id="child-modal-title">{sector.name}</h2>
                    </div>
                    <SectorModalBody sector={sector} handleClose={handleClose}/>
                </div>
            </Modal>
            : null
    )
}

export default BaseSectorModal