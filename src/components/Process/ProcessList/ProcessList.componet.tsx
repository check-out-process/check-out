import React, { useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.component';
import { getProcesses } from '../../../services/Process.service';
import { Process } from '../../../services/models/Process';
import { Typography } from '@material-ui/core';
import ProcessListHeader from './ProcessListHeader.component';

const ProcessList = () => {
    const [processes, setProcesses] = useState<Process[]>([])
    const [currentProcesses, setCurrentProcesses] = useState<Process[]>([])

    useEffect(() => {
        fetchProcesses()
    }, [])

    // todo: need to decide if show all the procesess or jut in progress
    const fetchProcesses = () => {
        getProcesses('dfdfd').then(((processes: Process[]) => {
            setProcesses(processes)
            // const inProgressProcesses: Process[] = processes.filter((process: Process) => process.status === "בתהליך")
            setCurrentProcesses(processes)
        }))
    }

    return (
        <div>
            <div style={{ marginTop: '10px' }}>
                <ProcessListHeader processes={processes} setProcesses={setCurrentProcesses} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {currentProcesses.length > 0 ? currentProcesses.map((process: Process, index: number) => {
                    return (
                        <div style={{ marginTop: '15px', width: '94%', boxShadow: '0px 0px 8px 1px #888888' }}>
                            <ProcessCard key={index} process={process} />
                        </div>
                    )
                })
                    :
                    <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">לא נמצאו תהליכים</Typography>
                }
            </div>
        </div>
    );

}

export default ProcessList