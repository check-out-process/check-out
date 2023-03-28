import Box from '@mui/material/Box';
import React from 'react';
import { ProcessSectorsProvider } from '../../context/ProcessSectorsContext';
import ProcessSectorForm from './ProcessSectorForm.component';


const ProcessCreation = () => {
  return (
    <Box className="appClass" sx={{ height: '100%' }}>
      <ProcessSectorsProvider>
        <ProcessSectorForm />
      </ProcessSectorsProvider>

    </Box>
  );

}

export default ProcessCreation