import React, { useRef, useState } from 'react';
import { Button, OutlinedInput, Typography } from "@material-ui/core";
import { addDepartment } from '../../services/Department.service';
import { enqueueSnackbar } from 'notistack';
import { createStyles, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginRight: '1%',
            display: 'flex',
            justifyContent: 'flex-start'
        },
        input: {
            width: '100%',
            '@media (min-width: 500px)': {
                width: '60%'
            }
        }
    }),
);


const DepartmentCreationPage: React.FC<{}> = ({ }) => {
    const [department, setDepartment] = useState<string>('');
    const classes = useStyles()

    const onSave = () => {
        addDepartment(department).then(() => {
            enqueueSnackbar('המחלקה נוצר בהצלחה', { variant: 'success' })
        }).
            catch(err => {
                enqueueSnackbar('שגיאה בעת הכנסת מחלקה', { variant: 'error' })
            })
    }

    return (
        <div>
            <Typography style={{ marginTop: '10px' }} align='center' variant="h6" component="div">הוספת מחלקה</Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className={classes.input} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography className={classes.title} align='right' variant="subtitle1" component="div">מחלקה</Typography>
                    <OutlinedInput onChange={event => setDepartment(event.target.value)} placeholder="הכנס שם מחלקה" />
                    <Button style={{ marginTop: '10px' }} variant="contained" color="primary" onClick={onSave}>שמירה</Button>
                </div>
            </div>
        </div>
    );

}

export default DepartmentCreationPage