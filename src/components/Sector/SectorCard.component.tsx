import { Card, CardContent, Typography, IconButton } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { Sector } from "../../services/models/Sector";
import './SectorCard.component.css';

const SectorCard = (sector: Sector) => {
    const ownerTitle = `אחראי: ${sector.owner}`

    return (
        <Card className="cardSector" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '8px' }}>
                <Typography component="div" variant="h5" fontSize={'17px'}>
                    {sector.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={'12px'}>
                    {ownerTitle}
                </Typography>
            </CardContent>
            <IconButton aria-label="previous" sx={{ marginRight: 'auto' }}>
                <MoreHorizIcon />
            </IconButton>
        </Card>
    )
}

export default SectorCard