import { Box, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ProcessCreationDetailsContext } from '../../../context/ProcessCreationContext';
import { DynamicInputTextPropertyProps } from './PropertiesFactory';

const DynamicInputTextProperty:React.FC<DynamicInputTextPropertyProps> = ({displayName, name}) => {
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);

    const onChange = (event: any) => {
        processDetails.properties[name] = event.target.value 
        setProcessDetails({...processDetails})
        console.log(processDetails)
    }

    return (
        <Box>
            <TextField
                fullWidth
                label={displayName}
                onChange={onChange}
                id="fullWidth" />
        </Box>
    )
}

export default DynamicInputTextProperty