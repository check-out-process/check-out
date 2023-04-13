import { CircularProgress, List, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { getProcessSectors } from "../../../../services/ProcessSector.service";
import { useLocation } from "react-router-dom";
import ProcessSectorCard from "./ProcessSectorCard.component";

const ProcessSectorsList: React.FC = () => {
    const [processSectors, setProcessSectors] = useState<ProcessSector[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const location = useLocation();
    const processId = location.state.processId;

    useEffect(() => {
        fetchDefaultSectors();
    }, [])

    const fetchDefaultSectors = () => {
        setLoading(true);
        getProcessSectors(processId).then((sectors: ProcessSector[]) => {
            setProcessSectors(sectors);
            setLoading(false);
        })
    }
    return (
        <div>
            {loading ? <CircularProgress disableShrink /> : null}
            {processSectors?.length > 0 && <List style={{
                width: '100%',
            }}>
                {processSectors.map((sector: ProcessSector) => (
                    <ProcessSectorCard key={sector.id} sector={sector} />
                ))}
            </List>}
            {processSectors?.length == 0 && !loading ?
                <Typography align='center' variant="h5" component="h2">לא נמצאו תהליכים</Typography> : null}

        </div>
    )
}

export default ProcessSectorsList