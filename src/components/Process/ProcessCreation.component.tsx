import React from 'react';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext';
import ProcessCreationBasicDetailsForm from './ProcessCreationBasicDetailsForm.component';
import CustomizedSteppers from './Stepper.component';

const ProcessCreation = () =>{
    return    (

      <div style={{ height: '100%' }}>
  <CustomizedSteppers/>  
        {/* <ProcessCreationProvider>
          <ProcessCreationBasicDetailsForm/>
        </ProcessCreationProvider> */}
      </div>
    );
   
}

export default ProcessCreation