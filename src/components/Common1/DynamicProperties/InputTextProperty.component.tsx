import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { DynamicPropertyType } from './PropertiesFactory.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title:{
            marginRight: '2%',
             width: '30%'
        },
        textField: {
            direction: "rtl",
            width: '80%',
            marginRight: '1%',
            display: 'flex',
            justifyContent: 'flex-start',
            '@media (min-width: 500px)': {
                width: '40%',
            },
            '@media (max-width: 500px)': {
                width: '80%',
            }
        }
    }),
);

const InputTextProperty: React.FC<DynamicPropertyType> = ({ property, onChange }) => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} align="right" variant="h6" component="h2">{property.propertyDisplayName}:</Typography>
            <TextField
                placeholder={property.propertyDisplayName}
                variant="outlined"
                className={classes.textField}
                onChange={(event: any) => { onChange(property.propertyName, event.target.value) }} />
        </div>
    )
}

export default InputTextProperty