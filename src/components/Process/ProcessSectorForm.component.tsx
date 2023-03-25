import { List, Button } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getSectors } from "../../services/Sector.service";
import AddSectorDrawer from "../Sector/AddSectorDrawer.component";
import SectorCard from "../Sector/SectorCard.component";
import './ProcessSectorForm.component.css';

const ProcessSectorForm = () => {
  const [sectorsData, setSectorData] = useState<Sector[]>([])
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    fetchSectors()
  }, [])

  const fetchSectors = () => {
    getSectors().then((sectors: Sector[]) => {
      setSectorData(sectors)
    })
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: '100%' }}>
      <div className="processSectorForm" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <List className="sectorsList" style={{
          width: '100%', counterReset: 'gradient-counter',
        }}>
          {sectorsData.map((sector: Sector) => (
            <SectorCard {...sector} />
          ))}
        </List>
        <div style={{ display: 'flex' }}>
          <Button onClick={handleDrawerOpen} variant="outlined" style={{ marginRight: '10px', marginLeft: '10px', height: '32px', maxWidth: '111px', marginBottom: '6px', marginTop: '8px' }} > הוספת סקטור</Button>
          <Button variant="outlined" style={{ height: '32px', width: '111px', marginBottom: '6px', marginTop: '8px' }}>אישור</Button>
        </div>
      </div >
      <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>

  )
}

export default ProcessSectorForm