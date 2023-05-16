import { CircularProgress, List, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { SectorInstane } from "../../../services/models/ProcessSector";
import { getProcessSectors } from "../../../services/ProcessSector.service";
import { useLocation } from "react-router-dom";
import ProcessSectorCard from "./ProcessSectorCard.component";
import PageHeader from "../Header/header.component";
import { Status } from "../../../services/models/Status";


const ProcessSectorsList: React.FC = () => {
    const [processSectors, setProcessSectors] = useState<SectorInstane[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const location = useLocation();
    const processId = location.state.processId;

    useEffect(() => {
        fetchDefaultSectors();
    }, [])

    const fetchDefaultSectors = () => {
        setLoading(true);
        getProcessSectors(processId).then((sectors: SectorInstane[]) => {
            setProcessSectors(sectors);
            setLoading(false);
        })
    }

    //change hardcode
    const sectorInstane = {
        instanceId: '0f108d1b-2b4a-4acb-8ae3-d2e20f49a129',
        sectorId: 'b02b21d7-ae29-41ca-bd5b-921285efd701',
        name: 'תחזוקה',
        resposibleTeamUserId: 4444,
        resposibleUserId: 3333,
        status: Status.Waiting,
    }

    return (
        <div>
            <PageHeader name='רשימת סקטורים' isFirstPage={false}/>
            {loading ? <CircularProgress disableShrink /> : null}
            {processSectors?.length > 0 && <List style={{
                width: '100%',
            }}>
                {processSectors.map((sector: SectorInstane) => (
                   
                    // <ProcessSectorCard key={sector.id} sector={sector} processId={processId}/>
                    <ProcessSectorCard key={sectorInstane.sectorId} sector={sectorInstane} processId={'9b60c643-2727-4daa-9188-a7f2a34f8c0d'}/>
                ))}
            </List>}
            {processSectors?.length == 0 && !loading ?
                <Typography align='center' variant="h5" component="h2">לא נמצאו סקטורים</Typography> : null}

        </div>
    )
}

export default ProcessSectorsList