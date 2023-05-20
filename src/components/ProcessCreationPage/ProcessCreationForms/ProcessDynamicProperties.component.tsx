import { makeStyles, createStyles, Theme, Checkbox } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { ProcessCreationDetailsContext } from '../../../context/ProcessCreationContext';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'transparent',
            marginRight: '1%',
            marginTop: '20px',
            width: '100%',

            '@media (min-width: 500px)': {
                width: '40%',
            },
            '@media (max-width: 500px)': {
                width: '80%',
            }
        },
        textArea: {
            justifyContent: 'flex-start',
            '@media (max-width: 500px)': {
                width: '95%',
            },
            width: '40%',
            direction: "rtl",
            marginRight: '1%',
            display: 'flex',
            backgroundColor: "transparent"
        },
        titleDescription: {
            marginRight: '1%',
            marginTop: '1%'
        },
        checkBoxBedIsolationContiner: {
            display: 'flex',
            alginItems: 'center'
        },
        checkBoxBedIsolation: {
            padding: '0'
        },
        textBedIsolation: {
            marginRight: '1%',
            marginLeft: '13px'
        }

    }),
);

const ProcessBasicDetailsForm = () => {
    const classes = useStyles();
    const { properties, setProperty } = useContext(ProcessCreationDetailsContext);
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    const onDescriptionChange = (event: any) => {
        setProperty('description', event.target.value)
        console.log(properties)
    }

    return (
        <div>
            <div className={classes.checkBoxBedIsolationContiner}>
                <Typography className={classes.textBedIsolation} align="right" variant="h6" component="div">האם בבידוד</Typography>
                <Checkbox
                    className={classes.checkBoxBedIsolation}
                    size="medium"
                    color='primary'
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </div>
            <Typography className={classes.titleDescription} align="right" variant="h6" component="div">תיאור חופשי</Typography>
            <TextareaAutosize value={properties['description']} minRows={6} placeholder="תיאור" className={classes.textArea} onChange={onDescriptionChange} />
        </div>
    )

}

export default ProcessBasicDetailsForm