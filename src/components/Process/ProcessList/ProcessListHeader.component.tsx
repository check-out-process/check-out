import React from 'react';
import LabelSwitch from '../../Common/Switch/LabelSwitch.component';
import { Process } from '../../../services/models/Process';
import { Typography } from '@material-ui/core';

export type ProcessListHeaderProps = {
    processes: Process[];
    setProcesses: (processes: Process[]) => void
}

const ProcessListHeader: React.FC<ProcessListHeaderProps> = ({ processes, setProcesses }) => {

    const onFinishedOptionClick = () => {
        const finsihedProcesses: Process[] = processes.filter((process: Process) => process.status === "סיום")
        setProcesses(finsihedProcesses)
    }

    const onInProgressOptionClick = () => {
        const inProgressProcesses: Process[] = processes.filter((process: Process) => process.status === "בתהליך")
        setProcesses(inProgressProcesses)
    }

    return (
        <div>
            <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">התהליכים שלי</Typography>
            <div style={{ marginRight: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <LabelSwitch
                    rightText='בתהליך'
                    leftText='סיום'
                    onLeftClick={onFinishedOptionClick}
                    onRightClick={onInProgressOptionClick} />
            </div>
        </div>

    );

}

export default ProcessListHeader