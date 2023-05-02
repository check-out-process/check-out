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
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    processSectorContainer: {
      height: '100%',
    },
    drawerIcon: {
      color: '#54546b'
    }
  }),
);
const ProcessSectorForm = () => {
  const { processSectors, setProcessSectors, setDrawerSectors } = useContext(ProcessSectorsContext);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchDefaultSectors();
    fetchNotDefaultSectors();
  }, [])

  const fetchDefaultSectors = () => {
    getDefaultSectors("").then((sectors: Sector[]) => {
      setProcessSectors(sectors)
    })
  }

  const fetchNotDefaultSectors = () => {
    getNotDefaultSectors('138371ec-8bd2-4f8a-b1fb-00c8b280ef58').then((sectors: Sector[]) => {
      const defaultSectorsIds = processSectors.map(sector => sector.id);
    
      setDrawerSectors(sectors.filter(sector => !defaultSectorsIds.includes(sector.id)));
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
      <div className={classes.processSectorContainer}>
        <div className="processSectorForm sectorsList" >
          <div>
            <SectorsList />
            <IconButton onClick={handleDrawerOpen} className={classes.drawerIcon}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </div >
        <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} />
      </div>
    </DragDropContext>
  )
}

export default ProcessSectorForm