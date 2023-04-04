import React, { useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.component';
import { getProcesses } from '../../../services/Process.service';
import { Process } from '../../../services/models/Process';
import { Typography } from '@material-ui/core';

const ProcessList = () => {
    const [processes, setProcesses] = useState<Process[]>([])

    useEffect(() => {
        fetchProcesses()
    }, [])

    const fetchProcesses = () => {
        return getProcesses('dfdfd').then(((processes: Process[]) => {
            setProcesses(processes)
        }))
    }

    return (
        <div>
            <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">התהליכים שלי</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {processes.map((process: Process, index: number) => {
                    return (
                        <div style={{ marginTop: '15px', width: '94%', boxShadow: '0px 0px 8px 1px #888888' }}>
                            <ProcessCard key={index} process={process} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );

}

export default ProcessList