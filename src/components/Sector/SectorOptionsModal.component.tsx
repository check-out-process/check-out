import { Box, Button, Modal } from "@mui/material";
import React, { Dispatch, SetStateAction } from 'react';


interface ISectorCardProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    refOffsetTop: number
}
const style = (refOffsetTop: number) => ({
    position: 'absolute' as 'absolute',
    left: '100px',
    transform: 'translate(-50%, -50%)',
    width: 136,
    height: '92px',
    bgcolor: 'background.paper',
    border: '1.5px solid black',
    borderRadius: '10px',
    boxShadow: '24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
    top: (135 + refOffsetTop)
});

const SectorOptionsModal: React.FC<ISectorCardProps> = ({ open, setOpen, refOffsetTop }: ISectorCardProps) => {

    const handleClose = () => setOpen(false);

    const handleEdit = () => {
    };

    const handleRemove = () => {
    };

    return (
        open ? <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">

            <Box sx={style(refOffsetTop)}>
                <Button onClick={handleEdit} >עריכה</Button>
                <Button onClick={handleRemove}>הסרה</Button>
            </Box>
        </Modal>
            : null
    )
}

export default SectorOptionsModal