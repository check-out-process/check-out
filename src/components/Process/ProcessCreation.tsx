import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import BedList from '../Bed/BedList';
import DepartmentList from '../Department/DepartmentList';
import RoomList from '../Room/RoomList';


const ProcessCreation = () =>{
    
    return    (
      <Box>
             <DepartmentList/>

             <RoomList/>

             <BedList/>

             <Typography variant="h6" component="h2">בחירת מיטה</Typography>;

             <Typography variant="h6" component="h2">הוספת פרטים נוספים על התהליך</Typography>;
      </Box>
    );
   
}

export default ProcessCreation