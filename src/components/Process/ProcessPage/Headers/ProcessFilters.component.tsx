import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Process } from "../../../../services/models/Process";
import { Button, Divider, Drawer, FormControlLabel, FormGroup, IconButton, OutlinedInput, TextField, Theme, Typography, createStyles, makeStyles } from "@material-ui/core";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStyles} from "./ProcessFilters.component.style";


export type ProcessFiltersProps = {
    processes: Process[];
    setProcesses: (processes: Process[]) => void,
    open?: boolean,
    setOpen?: (open: boolean) => void
} 


const ProcessFilters: React.FC<ProcessFiltersProps> = ({ processes, setProcesses, open, setOpen }) => {
    const classes = useStyles();
    const [statues, setStatues] = useState<string[]>(['סיום', 'בתהליך']);

    const [department, setDepartment] = useState<string>('');
    const [room, setRoom] = useState<string>('');
    const [bed, setBed] = useState<string>('');
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

    const filterProcesses = () => {
        let processesFounds: Process[] = processes;
        let hasChange = false
        if (department) {
            processesFounds = processesFounds.filter((process: Process) => process.departmentName.includes(department))
            hasChange = true
        }
        if (room) {
            processesFounds = processesFounds.filter((process: Process) => process.roomName.includes(room))
            hasChange = true
        }
        if (bed) {
            processesFounds = processesFounds.filter((process: Process) => process.bedName.includes(bed))
            hasChange = true
        }
        if (selectedStatuses.length > 0) {
            processesFounds = processesFounds.filter((process: Process) => selectedStatuses.includes(process.status))
            hasChange = true
        }
        
        return hasChange ? processesFounds : processes
    }

    const hasFilters = () => department || room || bed || selectedStatuses.length > 0

    const onSearchClick = () => {
        if (hasFilters()) {
            const foundProcesses = filterProcesses()
            setProcesses(foundProcesses)
        } else {
            setProcesses(processes)
        }
        setOpen(false)
    }

    const onStatusClick = (status: string) => {
        if (selectedStatuses.includes(status)) {
            setSelectedStatuses(oldArray => oldArray.filter(s => s !== status))
        } else {
            setSelectedStatuses(oldArray => [...oldArray, status])
        }
    }

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />

                <Typography className={classes.filters} align='center' variant="h5" component="div">חיפוש מתקדם</Typography>

                <Typography className={classes.filters} align='right' variant="subtitle1" component="div">מחלקה</Typography>
                <OutlinedInput placeholder="מחלקה" onChange={event => setDepartment(event.target.value)} />

                <Typography className={classes.filters} align='right' variant="subtitle1" component="div">חדר</Typography>
                <OutlinedInput placeholder="חדר" onChange={event => setRoom(event.target.value)} />

                <Typography className={classes.filters} align='right' variant="subtitle1" component="div">מיטה</Typography>
                <OutlinedInput placeholder="מיטה" onChange={event => setBed(event.target.value)} />
                
                <div className={classes.filters}>
                    {statues.map((status: string) => {
                        return (
                            <div style={{ display: 'flex' }}>
                                <Typography style={{ width: '50%', alignSelf: 'flex-start' }} align='right' variant="subtitle1" component="div">{status}</Typography>

                                <Checkbox
                                    checked={selectedStatuses.includes(status)}
                                    onChange={() => onStatusClick(status)}
                                    name={status}
                                    color="primary"
                                />

                            </div>
                        )
                    })}
                </div>


                <Button className={classes.filters} variant="contained" color="primary" onClick={onSearchClick}>חיפוש</Button>
            </Drawer>
        </div>
    );
}

export default ProcessFilters
