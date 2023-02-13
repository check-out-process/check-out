import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';
import ProcessBasicDetailsForm from './ProcessBasicDetailsForm';


const ProcessCreation = () =>{
    
    return    (
      <Box>
             <DepartmentList/>

             <RoomList/>

             <BedList/>
        
             <ProcessBasicDetailsForm/>
      </Box>
    );
   
}

export default ProcessCreation