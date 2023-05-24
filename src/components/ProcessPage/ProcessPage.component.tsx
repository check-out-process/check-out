import React, { memo, useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.component';
import { CircularProgress, Typography } from '@material-ui/core';
import ProcessListHeader from './Headers/ProcessListHeader.component';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useStyles } from './ProcessList.component.styles';
import { getUserProcessInstance, getUserProcessInstances } from '../../services/ProcessInstance.service';
import { ProcessInstance } from '@checkout/types';
import { useParams } from 'react-router-dom';

const ProcessPage = () => {
    const { processId } = useParams();
    const [process, setProcess] = useState<ProcessInstance>();
    
    useEffect(() => {
        getUserProcessInstance(processId)
    })

    return (
        <div>
            {}
        </div>
    );

}

export default ProcessPage