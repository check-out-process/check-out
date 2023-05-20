import { CircularProgress, List, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ProcessSectorCard from "./ProcessSectorCard.component";
import PageHeader from "../Header/header.component";
import { Status } from "../../../services/models/Status";
import { getProcessSectorInstances } from "../../../services/ProcessInstance.service";
import { SectorInstance } from '@checkout/types';


const ProcessSectorsList: React.FC = () => {
    const [processSectors, setProcessSectors] = useState<SectorInstance[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const location = useLocation();
    const processId = location.state.processId;

    useEffect(() => {
        fetchProcessSectorInstances();
    }, [])

    const fetchProcessSectorInstances = () => {
        setLoading(true);
        getProcessSectorInstances(processId).then((sectors: SectorInstance[]) => {
            setProcessSectors(sectors);
            setLoading(false);
        })
    }


    return (
        <div>
            <PageHeader name='רשימת סקטורים' isFirstPage={false}/>
            {loading ? <CircularProgress disableShrink /> : null}
            {processSectors?.length > 0 && <List style={{
                width: '100%',
            }}>
                {processSectors.map((sector: SectorInstance) => (
                    <ProcessSectorCard key={sector.instanceId} sector={sector} processId={processId}/>
                ))}
            </List>}
            {processSectors?.length == 0 && !loading ?
                <Typography align='center' variant="h5" component="h2">לא נמצאו סקטורים</Typography> : null}

        </div>
    )
}

export default ProcessSectorsList