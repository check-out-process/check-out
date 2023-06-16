import { IconButton, CircularProgress } from "@material-ui/core";
import React, { useEffect, useContext, useState } from 'react';
import { Sector, ProcessTemplate } from "@checkout/types";
import { getDefaultSectors, getNotDefaultSectors } from "../../../services/Sector.service";
import AddSectorDrawer from "../../Sector/AddSector/AddSectorDrawer.component";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import SectorsList from "../../Sector/SectorsList.component";
import './ProcessSectorForm.component.css';
import { ProcessSectorsContext } from "../../../context/ProcessSectorsContext";
import { createStyles, makeStyles } from '@material-ui/core';
import { ProcessCreationDetailsContext } from "../../../context/ProcessCreationContext";
import { ProcessTemplateFactory } from "../ProcessTemplate.factory";

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
  const { properties, department } = useContext(ProcessCreationDetailsContext);
  const { processSectors, setProcessSectors, setDrawerSectors } = useContext(ProcessSectorsContext);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const a = ProcessTemplateFactory();
    const {processTemplateIsolationId, processTemplateBedNonIsolationId, processTypeId } = (ProcessTemplateFactory() as any )[department.name];;
    fetchDefaultSectors(processTemplateIsolationId, processTemplateBedNonIsolationId);
    fetchNotDefaultSectors(processTypeId);
  }, [])

  const fetchDefaultSectors = (processTemplateIsolationId: string, processTemplateBedNonIsolationId: string) => {
    setIsLoading(true);
    const processId = properties.isIsolation ? processTemplateIsolationId : processTemplateBedNonIsolationId;

    getDefaultSectors(processId).then((processTemplate: ProcessTemplate) => {
      const sectors: Sector[] = [];

      processTemplate.relatedSectorsOrder.forEach(sectorId => {
        const sector = processTemplate?.relatedSectors?.find(sector => sector.id === sectorId);
       
        if (sector) {
          sectors.push(sector)
        }
      });

      setProcessSectors(sectors)
      setIsLoading(false);
    })
  }

  const fetchNotDefaultSectors = (processTypeId: string) => {
    getNotDefaultSectors(processTypeId).then((sectors: Sector[]) => {
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
      {isLoading ? <CircularProgress /> :
        <div className={classes.processSectorContainer}>
          <div className="processSectorForm sectorsList" >
            <div>
              <SectorsList />
              <IconButton onClick={handleDrawerOpen} className={classes.drawerIcon}>
                <AddCircleOutlineIcon style={{height: '27px',width: '27px' }}/>
              </IconButton>
            </div>
          </div >
          <AddSectorDrawer open={open} handleDrawerClose={handleDrawerClose} />
        </div>
      }
    </DragDropContext>
  )
}

export default ProcessSectorForm