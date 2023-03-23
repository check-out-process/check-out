import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { ProcessCreationDetailsContext } from '../../../context/ProcessCreationContext';
import { DynamicInputTextPropertyProps } from './PropertiesFactory';


const DynamicInputTextProperty: React.FC<DynamicInputTextPropertyProps> = ({ displayName, name }) => {
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);

    const onChange = (event: any) => {
        processDetails.properties[name] = event.target.value
        setProcessDetails({ ...processDetails })
    }

    return (
        <div>
            <Typography style={{marginRight:'1%', width: '30%'}} align="right" variant="h6" component="h2">{displayName}:</Typography>
            <TextField variant="outlined"
                style={{ direction: "rtl", width: '80%',marginRight:'1%', display:'flex',justifyContent:'flex-start' }}
                onChange={onChange}
                id="fullWidth" />
        </div>
    )
}

export default DynamicInputTextProperty