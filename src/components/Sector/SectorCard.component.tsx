import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState, useRef } from 'react';
import { Sector } from "../../services/models/Sector";
import './SectorCard.component.css';
import SectorOptionsModal from "./SectorOptionsModal.component";
import { Draggable } from "react-beautiful-dnd";

interface ISectorCardProps {
    sector: Sector,
    index: number;
}
const SectorCard: React.FC<ISectorCardProps> = ({ sector, index }: ISectorCardProps) => {
    const [open, setOpen] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const ref = useRef(null)

    const ownerTitle = `אחראי: ${sector.owner}`;

    const handleOpen = () => {
        setOffsetTop(window.pageYOffset + ref.current.getBoundingClientRect().top)
        setOpen(true);
    }

    return (
        <Draggable key={sector.id} draggableId={sector.id} index={index}>
            {(provided, snapshot) => (
                    <div  {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`sector ${snapshot.isDragging ? "drag" : ""}`}>
                        <Card ref={ref} className="cardSector" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
                            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px' }}>
                                <Typography component="div" variant="h5" style={{ fontSize: '16px', marginRight: '15px' }}>
                                    {sector.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" component="div" style={{ fontSize: '12px', marginRight: '15px' }}>
                                    {ownerTitle}
                                </Typography>
                            </CardContent>
                            <IconButton className="iconButton" aria-label="previous" style={{ marginRight: 'auto' }} onClick={handleOpen}>
                                <MoreHorizIcon />
                            </IconButton>
                        </Card>
                        <SectorOptionsModal open={open} setOpen={setOpen} refOffsetTop={offsetTop} sector={sector} />
                    </div>
            )}
        </Draggable>
    )
}

export default SectorCard