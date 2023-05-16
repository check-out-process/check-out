import React from 'react';
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { SectorInstane } from "../../../services/models/ProcessSector";
import { Sector } from "../../../services/models/Sector";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './BaseSectorCard.component.css';

interface IBaseSectorCardProps {
    sector: SectorInstane | Sector,
    withModal: Boolean,
    handleOpen?: () => void
}

const BaseSectorCard: React.FC<IBaseSectorCardProps> = ({ sector, withModal, handleOpen }: IBaseSectorCardProps) => {
    const ownerTitle = "אחראי: אפק לב"//need to get it

    return (
        <div>
            <Card className="cardSector" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '4px' }}>
                    <Typography component="div" variant="h5" style={{ fontSize: '16px', marginRight: '15px' }}>
                        {sector.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component="div" style={{ fontSize: '12px', marginRight: '15px' }}>
                        {ownerTitle}
                    </Typography>
                </CardContent>
                {withModal && 
                <IconButton className="iconButton" aria-label="previous" style={{ marginRight: 'auto', padding: '0px', marginLeft: '12px' }} onClick={handleOpen}>
                    <MoreHorizIcon />
                </IconButton>}
            </Card>
        </div>
    )
}

export default BaseSectorCard