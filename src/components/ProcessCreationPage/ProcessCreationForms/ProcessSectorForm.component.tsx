import { Button, IconButton } from "@material-ui/core";
import React, { useEffect, useContext } from 'react';
import { Sector } from "../../../services/models/Sector";
import { getDefaultSectors, getNotDefaultSectors } from "../../../services/Sector.service";
import AddSectorDrawer from "../../Sector/AddSector/AddSectorDrawer.component";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import SectorsList from "../../Sector/SectorsList.component";
import './ProcessSectorForm.component.css';
import { ProcessSectorsContext } from "../../../context/ProcessSectorsContext";

const ProcessSectorForm = () => {
  const { processSectors, setProcessSectors, setNotDefaultSectors } = useContext(ProcessSectorsContext);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchDefaultSectors();
    fetchNotDefaultSectors();
  }, [])

  const fetchDefaultSectors = () => {
    getDefaultSectors().then((sectors: Sector[]) => {
      setProcessSectors(sectors)
    })
  }

  const fetchNotDefaultSectors = () => {
    //change to get all sectors
    getNotDefaultSectors().then((sectors: Sector[]) => {
      setNotDefaultSectors(sectors)
    })
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
  };

  const saveProcessSector = () => {
    console.log(processSectors);
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
    let active = processSectors;
    add = active[source.index];
    active.splice(source.index, 1);
    active.splice(destination.index, 0, add);

    setProcessSectors(active);
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ height: '100%' }}>
        <div className="processSectorForm sectorsList" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
            <SectorsList />
            <IconButton onClick={handleDrawerOpen} style={{ color: '#54546b' }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          {/* <div style={{ display: 'flex' }}>
            <Button variant="outlined" onClick={handleCancel} style={buttonsStyle()} >ביטול</Button>
            <Button variant="outlined" onClick={saveProcessSector} style={buttonsStyle()}>אישור</Button>
          </div> */}
        </div >
        <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} />
      </div>
    </DragDropContext>
  )
}

export default ProcessSectorForm