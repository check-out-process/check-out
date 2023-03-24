import { List, Box } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { Sector } from "../../services/models/Sector";
import { getSectors } from "../../services/Sector.service";
import SectorCard from "../Sector/SectorCard.component";

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
    <Box className="sectorsList" sx={{ display: 'flex', justifyContent: 'center' }}>
      <List sx={{
        width: '100%', maxWidth: 600, counterReset: 'gradient-counter',
      }}>
        {sectorsData.map((sector: Sector) => (
          <SectorCard {...sector} />
        ))}
      </List>
    </Box>
  )
}

export default ProcessSectorForm