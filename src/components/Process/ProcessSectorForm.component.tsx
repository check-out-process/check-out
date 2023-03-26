import { List, Button, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getSectors } from "../../services/Sector.service";
import AddSectorDrawer from "../Sector/AddSector/AddSectorDrawer.component";
import SectorCard from "../Sector/SectorCard.component";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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

  const addProcessSector = (sector: Sector) => {
    setProcessSectors(current => [...current, sector]);
    setDefaultSectorsData(current => [...current, sector]);

    setSectorData((current) =>
      current.filter((currentSector) => currentSector.id !== sector.id)
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

  return (
    <div style={{ height: '100%' }}>
      <div className="processSectorForm" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List className="sectorsList" style={{
          width: '100%', counterReset: 'gradient-counter',
        }}>
          {defaultSectorsData.map((sector: Sector) => (
            <SectorCard sector={sector} removeProcessSector={removeProcessSector} />
          ))}
        </List>
        <IconButton onClick={handleDrawerOpen} style={{ color: '#54546b' }}>
          <AddCircleOutlineIcon />
        </IconButton>
        <div style={{ display: 'flex', position: 'absolute', bottom: 0 }}>
          <Button variant="outlined" onClick={handleCancel} style={buttonsStyle()} >ביטול</Button>
          <Button variant="outlined" onClick={saveProcessSector} style={buttonsStyle()}>אישור</Button>
        </div>
      </div >
      <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} sectorsData={sectorsData} addProcessSector={addProcessSector} />
    </div>

  )
}

export default ProcessSectorForm