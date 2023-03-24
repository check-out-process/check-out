import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState, useRef } from 'react';
import { Sector } from "../../services/models/Sector";
import './SectorCard.component.css';
import SectorOptionsModal from "./SectorOptionsModal.component";



const SectorCard = (sector: Sector) => {
    const [open, setOpen] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const ref = useRef(null)

    const ownerTitle = `אחראי: ${sector.owner}`;

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOffsetTop(ref.current.offsetTop)
        setOpen(true);
    }

    return (
        <Box>
            <Card ref={ref} className="cardSector" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
                    <Typography component="div" variant="h5" fontSize={'17px'}>
                        {sector.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={'12px'}>
                        {ownerTitle}
                    </Typography>
                </CardContent>
                <IconButton className="iconButton" aria-label="previous" sx={{ marginRight: 'auto' }} onClick={(event) => handleOpen(event)}>
                    <MoreHorizIcon />
                </IconButton>
            </Card>
            <SectorOptionsModal open={open} setOpen={setOpen} refOffsetTop={offsetTop} />
        </Box>
    )
}

export default SectorCard