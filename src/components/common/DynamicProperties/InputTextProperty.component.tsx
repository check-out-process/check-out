import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { DynamicPropertyType } from './PropertiesFactory.component';


const InputTextProperty: React.FC<DynamicPropertyType> = ({ property, onChange }) => {

    return (
        <div>
            <Typography style={{ marginRight: '2%', width: '30%' }} align="right" variant="h6" component="h2">{property.propertyDisplayName}:</Typography>
            <TextField
                variant="outlined"
                style={{ direction: "rtl", width: '80%', marginRight: '1%', display: 'flex', justifyContent: 'flex-start' }}
                onChange={(event: any) => {onChange(property.propertyName,event.target.value)}} />
        </div>
    )
}

export default InputTextProperty