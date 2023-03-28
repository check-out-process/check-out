import { List } from "@material-ui/core";
import React, { useContext } from 'react';
import { Sector } from "../../services/models/Sector";
import SectorCard from "./SectorCard.component";
import { Droppable, } from "react-beautiful-dnd";
import { ProcessSectorsContext } from "../../context/ProcessSectorsContext";


const SectorsList: React.FC = () => {
    const { processSectors } = useContext(ProcessSectorsContext);

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
                        {processSectors.map((sector: Sector, index: number) => (
                            <SectorCard key={sector.id} sector={sector} index={index} />
                        ))}
                    </List>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>

    )
}

export default SectorsList