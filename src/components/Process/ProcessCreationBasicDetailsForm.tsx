import Box from '@mui/material/Box';
import React, { useState } from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';
import ProcessBasicDetailsForm from './ProcessBasicDetailsForm';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext'
import { Button } from '@mui/material';
import Typography from '@material-ui/core/Typography';


const ProcessCreationBasicDetailsForm = () => {

  const onContinueClick = () => {

  }

  const onCancelClick = () => {

  }

  return (
    <Box>
      <ProcessCreationProvider>
        <div style={{ marginTop: "2%" }}>
          <DepartmentList />
        </div>
        <div style={{ marginTop: "2%" }}>
          <RoomList />
        </div>
        <div style={{ marginTop: "2%" }}>
          <BedList />
        </div>
        <ProcessBasicDetailsForm />


        <div style={{ marginRight:'1%',display: 'flex',marginTop:'3%', alignItems: 'flex-end' }}>
          <Button style={{ width:'40%', textAlign:'center'}} variant="outlined" onClick={onCancelClick}>
          <Typography align="center" variant="h6" component="h2">ביטול</Typography>
          </Button>
          <Button style={{ marginRight:'1%',width:'40%', textAlign:'center' }} variant="outlined" onClick={onContinueClick}>
            <Typography align="center" variant="h6" component="h2">המשך</Typography>
          </Button>

        </div>
      </ProcessCreationProvider>
    </Box>
  );

}

export default ProcessCreationBasicDetailsForm