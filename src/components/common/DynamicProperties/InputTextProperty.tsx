import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { ProcessCreationDetailsContext } from '../../../context/ProcessCreationContext';
import { ProcssPropertiesSchema } from '../../../services/models/Process';


const DynamicInputTextProperty: React.FC<ProcssPropertiesSchema> = ({ propertyDisplayName, propertyName }) => {
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);

    const onChange = (event: any) => {
        processDetails.properties[propertyName] = event.target.value
        setProcessDetails({ ...processDetails })
    }

    return (
        <div>
            <Typography style={{ marginRight: '2%', width: '30%' }} align="right" variant="h6" component="h2">{propertyDisplayName}:</Typography>
            <TextField
                variant="outlined"
                style={{ direction: "rtl", width: '80%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }}
                onChange={onChange} />
        </div>
    )
}

export default DynamicInputTextProperty