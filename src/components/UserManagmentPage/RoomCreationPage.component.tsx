import React, { useState } from 'react';
import { Button, OutlinedInput, Typography } from "@material-ui/core";
import { enqueueSnackbar } from 'notistack';
import { DepartmentDTO } from '@checkout/types';
import DepartmentList from '../Department/DepartmentList';
import { addRoom } from '../../services/Room.service';
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

const RoomCreationPage: React.FC = () => {
    const [department, setDepartment] = useState<DepartmentDTO>();
    const [room, setRoom] = useState<string>('');
    const [departments, setDepartments] = useState<DepartmentDTO[]>([]);
    const classes = useStyles()



    const onSave = () => {
        addRoom(department.id, room).then(() => {
            enqueueSnackbar('המחלקה נוצר בהצלחה', { variant: 'success' })
        }).catch(err => {
                enqueueSnackbar('שגיאה בעת הכנסת מחלקה', { variant: 'error' })
            })
    }

    return (
        <div>
            <Typography style={{ marginTop: '10px' }} align='center' variant="h6" component="div">הוספת מחלקה</Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className={classes.input} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <DepartmentList department={department} setDepartment={setDepartment} departments={departments} setDepartments={setDepartments} />

                    <Typography className={classes.title} style={{ marginTop: '10px' }} align='right' variant="subtitle1" component="div">חדר</Typography>
                    <OutlinedInput onChange={event => setRoom(event.target.value)} placeholder="הכנס שם חדר" />

                    <Button style={{ marginTop: '10px' }} variant="contained" color="primary" onClick={onSave}>שמירה</Button>
                </div>
            </div>
        </div>
    );

}

export default RoomCreationPage
