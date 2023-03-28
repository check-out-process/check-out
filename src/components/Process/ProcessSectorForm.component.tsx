import { Button, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getDefaultSectors, getNotDefaultSectors } from "../../services/Sector.service";
import AddSectorDrawer from "../Sector/AddSector/AddSectorDrawer.component";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import SectorsList from "../Sector/SectorsList.component";
import './ProcessSectorForm.component.css';

const ProcessSectorForm = () => {
  const [choosenSectorsData, setChoosenSectorsData] = useState<Sector[]>([]);
  const [notDefaultSectorsData, setNotDefaultSectorsData] = useState<Sector[]>([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchDefaultSectors();
    fetchNotDefaultSectors();
  }, [])

  const fetchDefaultSectors = () => {
    getDefaultSectors().then((sectors: Sector[]) => {
      setChoosenSectorsData(sectors)
    })
  }

  const fetchNotDefaultSectors = () => {
    //change to get all sectors
    getNotDefaultSectors().then((sectors: Sector[]) => {
      setNotDefaultSectorsData(sectors)
    })
  }

  const addProcessSectors = (sectors: Sector[]) => {
    setChoosenSectorsData(current => [...current, ...sectors]);

    setNotDefaultSectorsData((current) =>
      current.filter((currentSector) => !sectors.map(({ id }) => id).includes(currentSector.id))
    );
  };

  const removeProcessSector = (sector: Sector) => {
    setChoosenSectorsData((current) =>
      current.filter((currentSector) => currentSector.id !== sector.id)
    );
    // if its not default sector add to  notDefaultSectorsData
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
    console.log(choosenSectorsData);
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
    let active = choosenSectorsData;
    add = active[source.index];
    active.splice(source.index, 1);
    active.splice(destination.index, 0, add);

    setChoosenSectorsData(active);
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ height: '100%' }}>
        <div className="processSectorForm sectorsList" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
            <SectorsList choosenSectorsData={choosenSectorsData} removeProcessSector={removeProcessSector}/>
            <IconButton onClick={handleDrawerOpen} style={{ color: '#54546b' }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div style={{ display: 'flex' }}>
            <Button variant="outlined" onClick={handleCancel} style={buttonsStyle()} >ביטול</Button>
            <Button variant="outlined" onClick={saveProcessSector} style={buttonsStyle()}>אישור</Button>
          </div>
        </div >
        <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} sectorsData={notDefaultSectorsData} addProcessSectors={addProcessSectors} />
      </div>
    </DragDropContext>

  )
}

export default ProcessSectorForm