import React from 'react';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext';
import { ProcessSectorsProvider } from '../../context/ProcessSectorsContext';
import ProcessCreationBasicDetailsForm from './ProcessCreationBasicDetailsForm.component';
import CustomizedSteppers from './Stepper.component';

const ProcessCreation = () => {
  return (
    <div style={{ height: '100%' }}>
      <ProcessCreationProvider>
        <ProcessSectorsProvider>
          <CustomizedSteppers />
        </ProcessSectorsProvider>
      </ProcessCreationProvider>
    </div>
  );

}

export default ProcessCreation