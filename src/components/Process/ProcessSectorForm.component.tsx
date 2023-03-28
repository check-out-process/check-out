import { List, Button, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getSectors } from "../../services/Sector.service";
import AddSectorDrawer from "../Sector/AddSector/AddSectorDrawer.component";
import SectorCard from "../Sector/SectorCard.component";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Droppable, DragDropContext, DropResult } from "react-beautiful-dnd";
import './ProcessSectorForm.component.css';

const ProcessSectorForm = () => {
  const [defaultSectorsData, setDefaultSectorsData] = useState<Sector[]>([]);
  const [sectorsData, setSectorData] = useState<Sector[]>([]);
  const [processSectors, setProcessSectors] = useState<Sector[]>([])
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchDefaultSectors();
    fetchSectors();
  }, [])

  const fetchDefaultSectors = () => {
    getSectors().then((sectors: Sector[]) => {
      setDefaultSectorsData(sectors)
      setProcessSectors(sectors);
    })
  }

  const fetchSectors = () => {
    //change to get all sectors
    getSectors().then((sectors: Sector[]) => {
      setSectorData(sectors)
    })
  }

  const addProcessSectors = (sectors: Sector[]) => {
    setProcessSectors(current => [...current, ...sectors]);
    setDefaultSectorsData(current => [...current, ...sectors]);

    setSectorData((current) =>
      current.filter((currentSector) => !sectors.map(({ id }) => id).includes(currentSector.id))
    );
  };

  const removeProcessSector = (sector: Sector) => {
    setProcessSectors((current) =>
      current.filter((currentSector) => currentSector.id !== sector.id)
    );
    setDefaultSectorsData((current) =>
      current.filter((currentSector) => currentSector.id !== sector.id)
    );
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
  };

  const saveProcessSector = () => {
    // send api request to save and move to open process page
  };

  const buttonsStyle = () => ({
    marginRight: '10px', height: '32px', width: '85px', marginBottom: '6px', marginTop: '8px'
  });

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    let add;
    let active = defaultSectorsData;
    add = active[source.index];
    active.splice(source.index, 1);
    active.splice(destination.index, 0, add);

    setDefaultSectorsData(active);
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ height: '100%' }}>
        <div className="processSectorForm sectorsList" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
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
                    {defaultSectorsData.map((sector: Sector, index: number) => (
                      <SectorCard sector={sector} removeProcessSector={removeProcessSector} index={index} />
                    ))}
                  </List>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <IconButton onClick={handleDrawerOpen} style={{ color: '#54546b' }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div style={{ display: 'flex' }}>
            <Button variant="outlined" onClick={handleCancel} style={buttonsStyle()} >ביטול</Button>
            <Button variant="outlined" onClick={saveProcessSector} style={buttonsStyle()}>אישור</Button>
          </div>
        </div >
        <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} sectorsData={sectorsData} addProcessSectors={addProcessSectors} />
      </div>
    </DragDropContext>

  )
}

export default ProcessSectorForm