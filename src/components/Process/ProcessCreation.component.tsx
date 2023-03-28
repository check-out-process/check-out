import React from 'react';
import { ProcessCreationProvider } from '../../context/ProcessCreationContext';
import ProcessCreationBasicDetailsForm from './ProcessCreationBasicDetailsForm.component';

const ProcessCreation = () =>{
    return    (
      <div>
        <ProcessCreationProvider>
          <ProcessCreationBasicDetailsForm/>
        </ProcessCreationProvider>
      </div>
    );
   
}

export default ProcessCreation