import { List } from "@material-ui/core";
import React from 'react';
import { Sector } from "../../services/models/Sector";
import SectorCard from "./SectorCard.component";
import { Droppable, } from "react-beautiful-dnd";

interface ISectorsListProps {
    choosenSectorsData: Sector[],
    removeProcessSector: (sector: Sector) => void,
}

const SectorsList: React.FC<ISectorsListProps> = ({ choosenSectorsData, removeProcessSector }: ISectorsListProps) => {
    return (
        <Droppable droppableId="sectorsList">
            {(provided, snapshot) => (
                <div
                    className={`sectors ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <List style={{
                        width: '100%', counterReset: 'gradient-counter',
                    }}>
                        {choosenSectorsData.map((sector: Sector, index: number) => (
                            <SectorCard key ={sector.id} sector={sector} removeProcessSector={removeProcessSector} index={index} />
                        ))}
                    </List>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>

    )
}

export default SectorsList