import React, { useState, useRef } from 'react';
import { Sector } from "../../services/models/Sector";
import SectorOptionsModal from "./SectorOptionsModal.component";
import { Draggable } from "react-beautiful-dnd";
import BaseSectorCard from "../Common/Sector/BaseSectorCard.component";

interface ISectorCardProps {
    sector: Sector,
    index: number;
}
const SectorCard: React.FC<ISectorCardProps> = ({ sector, index }: ISectorCardProps) => {
    const [open, setOpen] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const ref = useRef(null)

    const handleOpen = () => {
        setOffsetTop(window.pageYOffset + ref.current.getBoundingClientRect().top)
        setOpen(true);
    }
    const sectorIdIndexUinq = `${sector.id}${index}`

    return (
        <Draggable key={sectorIdIndexUinq} draggableId={sectorIdIndexUinq} index={index}>
            {(provided, snapshot) => (
                <div  {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`sector ${snapshot.isDragging ? "drag" : ""}`}>
                    <div ref={ref}>
                        <BaseSectorCard sector={sector} withModal={true} handleOpen={handleOpen} />
                    </div>
                    <SectorOptionsModal open={open} setOpen={setOpen} refOffsetTop={offsetTop} sector={sector} />
                </div>
            )}
        </Draggable>
    )
}

export default SectorCard