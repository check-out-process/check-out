import React, { useContext, useState } from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';
import ProcessBasicDetailsForm from './ProcessDynamicProperties.component';
import { ProcessCreationDetailsContext, ProcessCreationProvider } from '../../context/ProcessCreationContext'
import { Button } from '@mui/material';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Department } from '../../services/models/Department';
import { Room } from '../../services/models/Room';
import { Bed } from '../../services/models/Bed';
import BaseModal from '../Common/Modal/BaseModal.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: "0",
      '@media (min-width: 500px)': {
        width: '100%',
        marginRight: "30%"
      }
    },
    select: {
      marginTop: '2%'
    },
    buttonRoot: {
      marginRight: '1%',
      display: 'flex',
      marginTop: '3%',
      alignItems: 'flex-end'
    },
    cancelButton: {
      textAlign: 'center',
      justifyContent: 'flex-start',
      '@media (min-width: 500px)': {
        width: '20%',
      },
      '@media (max-width: 500px)': {
        width: '40%',
      }
    },
    continueButton: {
      marginRight: '1%',
      textAlign: 'center',
      justifyContent: 'flex-start',
      '@media (min-width: 500px)': {
        width: '20%',
      },
      '@media (max-width: 500px)': {
        width: '40%',
      }
    }
  }),
);


const ProcessCreationBasicDetailsForm = () => {
  const classes = useStyles();
  const [department, setDepartment] = useState<Department>()
  const [room, setRoom] = useState<Room>()
  const [bed, setBed] = useState<Bed>()
  const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
  const [open, setOpen] = useState<boolean>(false);



  const onDepartmentChange = (department: Department) => {
    processDetails.deparmentUuid = department.uuid;
    processDetails.roomUuid = undefined;
    processDetails.bedUuid = undefined;
    setRoom(undefined);
    setBed(undefined);
    setProcessDetails({ ...processDetails })
    setDepartment(department);
  }

  const onRoomChange = (room: Room) => {
    processDetails.roomUuid = room.uuid;
    processDetails.bedUuid = undefined;
    setProcessDetails({ ...processDetails })
    setRoom(room)
    setBed(undefined);
  }

  const onBedChange = (bed: Bed) => {
    processDetails.bedUuid = bed.uuid;
    setProcessDetails({ ...processDetails })
    setBed(bed)
  }

  const isCurrentStepValid = (): boolean => {
    return (department !== undefined) && (room !== undefined) && (bed !== undefined);
  }


  const onContinueClick = () => {
    console.log(processDetails)
  }

  const onCancelClick = () => {
    setOpen(true);
  }

  const onModalStatusChange = (confirm: boolean) => {
    setOpen(false);
    if (confirm) {
      processDetails.deparmentUuid = undefined
      processDetails.roomUuid = undefined;
      processDetails.bedUuid = undefined;
      setDepartment(undefined);
      setRoom(undefined);
      setBed(undefined);
      setProcessDetails({ ...processDetails })
    }
  }

  return (

    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
      <div className={classes.root}>
        <div className={classes.select}>
          <DepartmentList department={department} setDepartment={onDepartmentChange} />
        </div>

        <div className={classes.select}>
          <RoomList department={department} room={room} setRoom={onRoomChange} />
        </div>

        <div className={classes.select}>
          <BedList room={room} bed={bed} setBed={onBedChange} />
        </div>


        <ProcessBasicDetailsForm />
        {/* <div className={classes.buttonRoot}>
          <Button className={classes.cancelButton} variant="contained" color="primary" onClick={onCancelClick}>
            <Typography align="center" variant="h6" component="h2">ביטול</Typography>
          </Button>
          <Button className={classes.continueButton} disabled={!isCurrentStepValid()} variant="contained" color="primary" onClick={onContinueClick}>
            <Typography align="center" variant="h6" component="h2">המשך</Typography>
          </Button>
        </div> */}
        {open ? <BaseModal open={open} setOpen={onModalStatusChange} /> : null}
      </div>
    </div>
  );

}

export default ProcessCreationBasicDetailsForm