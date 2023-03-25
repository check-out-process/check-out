import { List, Box, Button } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getSectors } from "../../services/Sector.service";
import SectorCard from "../Sector/SectorCard.component";
import './ProcessSectorForm.component.css';

const ProcessSectorForm = () => {
  const [sectorsData, setSectorData] = useState<Sector[]>([])

  useEffect(() => {
    fetchSectors()
  }, [])

  const fetchSectors = () => {
    getSectors().then((sectors: Sector[]) => {
      setSectorData(sectors)
    })
  }

  return (
    <Box className="processSectorForm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <List  className="sectorsList" sx={{
        width: '100%', counterReset: 'gradient-counter',
      }}>
        {sectorsData.map((sector: Sector) => (
          <SectorCard {...sector} />
        ))}
      </List>
      <Box sx={{ display: 'flex' }}>
        <Button variant="outlined" sx={{ marginRight: '10px', marginLeft: '10px', height: '32px', maxWidth: '111px', marginBottom: '6px', marginTop: '8px' }} > הוספת סקטור</Button>
      <Button variant="outlined" sx={{ height: '32px', width: '111px', marginBottom: '6px', marginTop: '8px' }}>אישור</Button>
    </Box>
    </Box >
  )
}

export default ProcessSectorForm