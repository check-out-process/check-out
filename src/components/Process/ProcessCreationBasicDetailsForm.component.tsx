import React, { useContext, useState } from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';
import ProcessBasicDetailsForm from './ProcessDynamicProperties.component';
import { ProcessCreationDetailsContext, ProcessCreationProvider } from '../../context/ProcessCreationContext'
import { createStyles, makeStyles, Theme } from '@material-ui/core';
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
    }
  }),
);


const ProcessCreationBasicDetailsForm = () => {
  const classes = useStyles();
  const { department,
    setDepartment,
    room,
    setRoom,
    bed,
    setBed,
    departments,
    setDepartments,
    rooms,
    setRooms,
    beds,
    setBeds
  } = useContext(ProcessCreationDetailsContext);
  const [open, setOpen] = useState<boolean>(false);

  const onCloseModal = (confirm: boolean) => {
    setOpen(false);
    if (confirm) {
      setDepartment(undefined);
      setRoom(undefined);
      setBed(undefined);
    }
  }

  return (

    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
      <div className={classes.root}>
        <div className={classes.select}>
          <DepartmentList department={department} setDepartment={setDepartment} departments={departments} setDepartments={setDepartments} />
        </div>

        <div className={classes.select}>
          <RoomList department={department} room={room} setRoom={setRoom} rooms={rooms} setRooms={setRooms} />
        </div>

        <div className={classes.select}>
          <BedList room={room} bed={bed} setBed={setBed} beds={beds} setBeds={setBeds} />
        </div>

        <div className={classes.select}>
          <ProcessBasicDetailsForm />
        </div>
        {open ? <BaseModal open={open} setOpen={onCloseModal} /> : null}
      </div>
    </div>
  );

}

export default ProcessCreationBasicDetailsForm