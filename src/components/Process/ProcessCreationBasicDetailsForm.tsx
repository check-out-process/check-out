import Box from '@mui/material/Box';
import React, { useState } from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';
import ProcessBasicDetailsForm from './ProcessBasicDetailsForm';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext'


const ProcessCreationBasicDetailsForm = () =>{
    return    (
      <Box>
         <ProcessCreationProvider>
            <DepartmentList/>
            <RoomList/>
            <BedList/>
            <ProcessBasicDetailsForm/>
            
        </ProcessCreationProvider>  
      </Box>
    );
   
}

export default ProcessCreationBasicDetailsForm