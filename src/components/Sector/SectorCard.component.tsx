import { Card, CardContent, Typography, IconButton } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import { Sector } from "../../services/models/Sector";

const SectorCard = (sector: Sector) => {
    const ownerTitle = `אחראי: ${sector.owner}`

    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '0 10px 15px 10px' }}>
            <IconButton aria-label="previous" sx={{ ":hover": { backgroundColor: 'transparent' } }}>
                <BedIcon />
            </IconButton>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography component="div" variant="h5">
                    {sector.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
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