import { InputAdornment, TextareaAutosize, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { ProcssPropertiesSchema } from '../../api/models/Process';
import { getProcessPropertiesSchema } from '../../api/ProcessApi';
import DynamicPropertiesFactory from '../Common/DynamicProperties/PropertiesFactory';


const ProcessBasicDetailsForm = () =>{
    const [processProperties,setProcessProperties] = useState<ProcssPropertiesSchema[]>([])

    useEffect(() => {
        fetchProcessProperties()
    },[])

    const fetchProcessProperties = () => {
        getProcessPropertiesSchema().then((processProperties: ProcssPropertiesSchema[]) => {
            setProcessProperties(processProperties)
        })
    }

    return    (
      <Box>
          <Typography variant="h6" component="h2">הוספת פרטים נוספים על התהליך</Typography>
          
          <Typography variant="h6" component="h2">תיאור חופשי</Typography>
          <TextareaAutosize minRows={6} placeholder="תיאור" style={{ width: '100%' }} />

            {processProperties.map(processProperty => {
                return (
                    <DynamicPropertiesFactory 
                        name={processProperty.propertyDisplayName}
                        displayName={processProperty.propertyDisplayName}
                        type={processProperty.propertyKind}/>
                )
            })}
      </Box>
    )
   
}

export default ProcessBasicDetailsForm