import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
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
        <div>
            <Card ref={ref} className="cardSector" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px' }}>
                    <Typography component="div" variant="h5" style={{ fontSize: '16px', marginRight: '15px' }}>
                        {sector.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component="div" style={{ fontSize: '12px', marginRight: '15px' }}>
                        {ownerTitle}
                    </Typography>
                </CardContent>
                <IconButton className="iconButton" aria-label="previous" style={{ marginRight: 'auto' }} onClick={(event) => handleOpen(event)}>
                    <MoreHorizIcon />
                </IconButton>
            </Card>
            <SectorOptionsModal open={open} setOpen={setOpen} refOffsetTop={offsetTop} />
        </div>
    )
}

export default SectorCard