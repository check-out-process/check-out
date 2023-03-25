import * as React from 'react';
import { Checkbox, Typography } from '@material-ui/core';
import { DynamicPropertyType } from './PropertiesFactory.component';

const CheckBoxProperty: React.FC<DynamicPropertyType> = ({ property, onChange }) => {
    const [checked, setChecked] = React.useState(property.value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onChange(property.propertyName, event.target.checked)
    };

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <Typography style={{ marginRight: '2%' }} align="right" variant="h6" component="h2">{property.propertyDisplayName}:</Typography>

            <Checkbox
                checked={checked}
                onChange={handleChange}
                color="primary"     
            />

        </div>
    );
}

export default CheckBoxProperty